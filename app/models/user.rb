# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :username, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :session_token, presence: true, uniqueness: true
  after_initialize :ensure_session_token
  attr_reader :password

 has_many :projects

 has_many :likes

 has_many :liked_projects, through: :likes, source: :project

 has_many :follower_connections,
  foreign_key: :follower_id,
  class_name: "UserConnection"

  has_many :following_connections,
   foreign_key: :following_id,
   class_name: "UserConnection"

 has_many :followers, through: :following_connections, source: :follower

 has_many :followings, through: :follower_connections, source: :following

 has_many :followingProjects, through: :followings, source: :projects

 has_many :tags, through: :projects, source: :tags




  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end


  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end


end
