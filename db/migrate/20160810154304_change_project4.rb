class ChangeProject4 < ActiveRecord::Migration
  def change
    add_column :projects, :width, :integer
    add_column :projects, :height, :integer
  end
end
