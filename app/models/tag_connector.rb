# == Schema Information
#
# Table name: tag_connectors
#
#  id         :integer          not null, primary key
#  project_id :string
#  tag_id     :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TagConnector < ActiveRecord::Base

  belongs_to :tag

  belongs_to :project

end
