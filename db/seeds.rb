# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create( username: "batman", password: "batmans" );
proj = Project.create(title: "Nike", user_id: User.find_by( username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/12.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/1.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/4.jpeg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "Football", user_id: User.find_by( username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/13.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/1.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/4.jpeg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "FunStuff", user_id: User.find_by( username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/14.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/1.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/4.jpeg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "Project 1", user_id: User.find_by( username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/15.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/1.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/4.jpeg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "Goodguy", user_id: User.find_by( username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/16.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/1.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/4.jpeg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "Frenchie", user_id: User.find_by( username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/17.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/1.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/4.jpeg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "Prankster", user_id: User.find_by( username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/18.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/1.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/4.jpeg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "Love", user_id: User.find_by(username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/19.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/1.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/4.jpeg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "WinterMan", user_id: User.find_by( username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/20.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/1.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/4.jpeg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "AlbumCover", user_id: User.find_by( username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/21.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/1.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/4.jpeg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "Running", user_id: User.find_by( username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/22.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/1.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/4.jpeg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "Giraffe", user_id: User.find_by( username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/23.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/1.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/4.jpeg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "Broken", user_id: User.find_by( username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/24.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/1.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/4.jpeg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "Stars", user_id: User.find_by(username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/25.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/1.jpg") );
  Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/4.jpeg") );
  proj.update(cover_image: cov.image_file.url)
