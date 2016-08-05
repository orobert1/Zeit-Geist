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

require 'test_helper'

class DescriptionLinkerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
