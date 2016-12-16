class CreateUserConnections < ActiveRecord::Migration
  def change
    create_table :user_connections do |t|
      t.integer :follower, null: false
      t.integer :followed, null: false
      t.timestamps null: false
    end
  end
end
