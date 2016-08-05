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

require 'test_helper'

class ImageLinkerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
