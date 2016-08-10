class ChangeProject2 < ActiveRecord::Migration
  def change
    remove_column :projects, :cover_image
    add_column :projects, :cover_image, :string
  end
end
