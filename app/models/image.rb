# == Schema Information
#
# Table name: images
#
#  id            :integer          not null, primary key
#  project_index :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Image < ActiveRecord::Base
  validates :project_index, presence: true, uniqueness: true
  has_attached_file :image, default_url: "stripes.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


  has_one :image_linker
  has_many :projects, through: :image_linker



end
