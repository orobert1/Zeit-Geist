# == Schema Information
#
# Table name: image_linkers
#
#  id         :integer          not null, primary key
#  image_id   :integer          not null
#  project_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ImageLinker < ActiveRecord::Base
  validates :image_id, presence: true
  validates :project_id, presence: true

  belongs_to :image
  belongs_to :project
end
