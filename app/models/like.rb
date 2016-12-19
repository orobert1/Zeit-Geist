# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  project_id :string           not null
#  user_id    :string           not null
#


class Like < ActiveRecord::Base
  validates :user_id, presence: true
  validates :project_id, presence: true

    belongs_to :user
    belongs_to :project

end
