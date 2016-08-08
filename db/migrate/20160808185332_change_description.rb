class ChangeDescription < ActiveRecord::Migration
  def change
    add_column :descriptions, :project_id, :integer
    add_index :descriptions, :project_id
  end
end
