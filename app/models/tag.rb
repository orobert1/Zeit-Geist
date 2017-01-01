# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  tagname    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ActiveRecord::Base

  has_many :tag_connectors
  has_many :projects,
  through: :tag_connectors

  def self.find_projects( tagname, length )
    tag = Tag.find_by( tagname: tagname )
    tag.projects
  end

end
