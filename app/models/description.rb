# == Schema Information
#
# Table name: descriptions
#
#  id            :integer          not null, primary key
#  project_index :integer          not null
#  body          :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Description < ActiveRecord::Base
  validates :project_index, presence: true, uniqueness: true
  validates :body, presence: true

  belongs_to :project

end
