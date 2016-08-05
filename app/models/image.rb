# == Schema Information
#
# Table name: images
#
#  id                      :integer          not null, primary key
#  project_index           :integer          not null
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  image_file_file_name    :string
#  image_file_content_type :string
#  image_file_file_size    :integer
#  image_file_updated_at   :datetime
#

class Image < ActiveRecord::Base
  validates :project_index, presence: true, uniqueness: true
  has_attached_file :image, default_url: "stripes.jpg"


  has_one :image_linker
  has_many :projects, through: :image_linker



end
