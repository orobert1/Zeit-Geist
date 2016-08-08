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
#  project_id              :integer
#

class Image < ActiveRecord::Base
  validates :project_index, presence: true
  has_attached_file :image_file, default_url: "stripes.jpg"
  validates_attachment_content_type :image_file, content_type: /\Aimage\/.*\Z/


  belongs_to :project



end
