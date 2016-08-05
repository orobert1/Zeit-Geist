class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.integer :project_index, null: false

      t.timestamps null: false
    end
    add_index :images, :project_index
  end
end
