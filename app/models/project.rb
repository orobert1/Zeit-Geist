# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  cover_image :string
#  margin_top  :integer
#  margin_left :integer
#  width       :integer
#  height      :integer
#

class Project < ActiveRecord::Base
  validates :title, presence: true
  belongs_to :user
  has_many :images
  has_many :descriptions
  has_many :likes
  has_many :likers, through: :likes, source: :user
  has_many :followers, through: :user, source: :followers
  has_many :tag_connectors
  has_many :tags, through: :tag_connectors

  def self.index( date, tags )

    if tags
      @projects = Project.includes(:user).joins(:tags)
      .where("projects.created_at < ? AND tags.tagname IN (?)", date, tags)
      .order("created_at DESC")
      .limit(15)
      return @projects.map{|el| {user: el.user,project: el}}
    else
      @projects = Project.includes(:user)
      .where("created_at < ?", date)
      .order("created_at DESC")
      .limit(15)
      return @projects.map{|el| {user: el.user,project: el}}
    end

  end

  def self.following( date, tags, current_user )
    if tags
      @projects = Project.includes(:user).joins(:followers, :tags)
      .where("users.id = ? AND projects.created_at < ? AND tags.tagname IN (?)", current_user.id, date, tags)
      .order("created_at DESC").limit(15)
      return @projects.map{|el|
        { user: el.user, project: el }
      }
    else
      @projects = Project.includes(:user, :tags).joins(:followers)
      .where("users.id = ? AND projects.created_at < ? ", current_user.id, date)
      .order("created_at DESC").limit(15)
      return @projects.map{|el|
        { user: el.user, project: el }
      }
    end
  end

  def self.personal( date, tags, current_user )
    if tags
      @projects = current_user.projects.joins( :tags )
      .where("projects.created_at < ? AND tags.tagname IN (?)", date, tags )
      .order("created_at DESC")
      .limit(15)
      return @projects.map{|el| {user: el.user,project: el}}
    else
      @projects = current_user.projects
      .where("created_at < ?", date)
      .order("created_at DESC")
      .limit(15)
      return @projects.map{|el| {user: el.user,project: el}}
    end
  end

end
