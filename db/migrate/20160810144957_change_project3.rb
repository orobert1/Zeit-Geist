class ChangeProject3 < ActiveRecord::Migration
  def change
    add_column :projects, :margin_top, :integer
    add_column :projects, :margin_left, :integer

  end
end
