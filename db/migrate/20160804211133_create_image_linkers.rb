class CreateImageLinkers < ActiveRecord::Migration
  def change
    create_table :image_linkers do |t|
      t.integer :image_id, null: false
      t.integer :project_id, null: false
      t.timestamps null: false
    end
    add_index :image_linkers, :image_id
    add_index :image_linkers, :project_id
  end
end
