class CreateDescriptions < ActiveRecord::Migration
  def change
    create_table :descriptions do |t|
      t.integer :project_index, null: false
      t.text :body, null: false
      t.timestamps null: false
    end
    add_index :descriptions, :project_index
  end
end
