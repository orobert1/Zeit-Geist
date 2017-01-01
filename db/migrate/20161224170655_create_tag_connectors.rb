class CreateTagConnectors < ActiveRecord::Migration
  def change
    create_table :tag_connectors do |t|
      t.string :project_id
      t.string :tag_id
      t.timestamps null: false
    end
  end
end
