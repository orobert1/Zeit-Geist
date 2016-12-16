# == Schema Information
#
# Table name: descriptions
#
#  id            :integer          not null, primary key
#  project_index :integer          not null
#  body          :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  project_id    :integer
#

require 'test_helper'

class DescriptionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
