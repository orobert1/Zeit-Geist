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

class UserConnection < ActiveRecord::Base

  belongs_to :follower,
    foreign_key: :follower_id,
    primary_key: :id,
    class_name: "User"

  belongs_to :following,
    foreign_key: :following_id,
    primary_key: :id,
    class_name: "User"

end
