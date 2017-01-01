class ChangeTags < ActiveRecord::Migration
  def change
    remove_column :tags, :project_id
  end
end
