class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.string :project_id, null: false
      t.string :user_id, null: false
    end
  end
end
