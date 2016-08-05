class CreateDescriptionLinkers < ActiveRecord::Migration
  def change
    create_table :description_linkers do |t|
      t.integer :description_id, null: false
      t.integer :project_id, null: false
      t.timestamps null: false
    end
    add_index :description_linkers, :description_id
    add_index :description_linkers, :project_id
  end
end
