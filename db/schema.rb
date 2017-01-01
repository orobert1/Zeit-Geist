# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161224180217) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "description_linkers", force: :cascade do |t|
    t.integer  "description_id", null: false
    t.integer  "project_id",     null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "description_linkers", ["description_id"], name: "index_description_linkers_on_description_id", using: :btree
  add_index "description_linkers", ["project_id"], name: "index_description_linkers_on_project_id", using: :btree

  create_table "descriptions", force: :cascade do |t|
    t.integer  "project_index", null: false
    t.text     "body",          null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "project_id"
  end

  add_index "descriptions", ["project_id"], name: "index_descriptions_on_project_id", using: :btree
  add_index "descriptions", ["project_index"], name: "index_descriptions_on_project_index", using: :btree

  create_table "image_linkers", force: :cascade do |t|
    t.integer  "image_id",   null: false
    t.integer  "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "image_linkers", ["image_id"], name: "index_image_linkers_on_image_id", using: :btree
  add_index "image_linkers", ["project_id"], name: "index_image_linkers_on_project_id", using: :btree

  create_table "images", force: :cascade do |t|
    t.integer  "project_index",           null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.string   "image_file_file_name"
    t.string   "image_file_content_type"
    t.integer  "image_file_file_size"
    t.datetime "image_file_updated_at"
    t.integer  "project_id"
  end

  add_index "images", ["project_id"], name: "index_images_on_project_id", using: :btree
  add_index "images", ["project_index"], name: "index_images_on_project_index", using: :btree

  create_table "likes", force: :cascade do |t|
    t.string "project_id", null: false
    t.string "user_id",    null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string   "title",       null: false
    t.integer  "user_id",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "cover_image"
    t.integer  "margin_top"
    t.integer  "margin_left"
    t.integer  "width"
    t.integer  "height"
  end

  add_index "projects", ["user_id"], name: "index_projects_on_user_id", using: :btree

  create_table "tag_connectors", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "project_id"
    t.integer  "tag_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string   "tagname"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_connections", force: :cascade do |t|
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "following_id"
    t.integer  "follower_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
