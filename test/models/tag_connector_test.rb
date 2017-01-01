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

require 'test_helper'

class TagConnectorTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
