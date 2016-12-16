class ChangeUserConnection < ActiveRecord::Migration
  def change
    remove_column :user_connections, :follower
    remove_column :user_connections, :followed

    add_column :user_connections, :following_id, :integer
    add_column :user_connections, :follower_id, :integer


  end
end
