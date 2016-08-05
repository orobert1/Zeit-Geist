# == Schema Information
#
# Table name: description_linkers
#
#  id             :integer          not null, primary key
#  description_id :integer          not null
#  project_id     :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class DescriptionLinker < ActiveRecord::Base
  validates :description_id, null: false
  validates :project_id, null: false

  belongs_to :project
  belongs_to :description
end
