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

end
