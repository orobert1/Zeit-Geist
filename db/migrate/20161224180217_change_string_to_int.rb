class ChangeStringToInt < ActiveRecord::Migration
  def change
    remove_column :tag_connectors, :tag_id
    remove_column :tag_connectors, :project_id

    add_column :tag_connectors, :project_id, :integer
    add_column :tag_connectors, :tag_id, :integer

  end
end
