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
#

require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
