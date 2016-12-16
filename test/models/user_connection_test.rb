# == Schema Information
#
# Table name: user_connections
#
#  id           :integer          not null, primary key
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  following_id :integer
#  follower_id  :integer
#

require 'test_helper'

class UserConnectionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
