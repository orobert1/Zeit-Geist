# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create( username: "batman", password: "batmans" );
User.create( username: "glassGuy", password: "frat" );
@guest = User.create( username: "Guest", password: "GuestPassword" );

proj = Project.create(title: "Nike", user_id: User.find_by( username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/12.jpg") );
  Image.create( project_id: proj.id, project_index: 2, image_file: File.new("#{Rails.root}/images/files/01.jpg") );
  Image.create( project_id: proj.id, project_index: 3, image_file: File.new("#{Rails.root}/images/files/04.jpg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "Football", user_id: User.find_by( username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/13.jpg") );
  Image.create( project_id: proj.id, project_index: 2, image_file: File.new("#{Rails.root}/images/files/01.jpg") );
  Image.create( project_id: proj.id, project_index: 3, image_file: File.new("#{Rails.root}/images/files/04.jpg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "FunStuff", user_id: User.find_by( username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/14.jpg") );
  Image.create( project_id: proj.id, project_index: 2, image_file: File.new("#{Rails.root}/images/files/01.jpg") );
  Image.create( project_id: proj.id, project_index: 3, image_file: File.new("#{Rails.root}/images/files/04.jpg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "Project 1", user_id: User.find_by( username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/15.jpg") );
  Image.create( project_id: proj.id, project_index: 2, image_file: File.new("#{Rails.root}/images/files/01.jpg") );
  Image.create( project_id: proj.id, project_index: 3, image_file: File.new("#{Rails.root}/images/files/04.jpg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "Goodguy", user_id: User.find_by( username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/16.jpg") );
  Image.create( project_id: proj.id, project_index: 2, image_file: File.new("#{Rails.root}/images/files/01.jpg") );
  Image.create( project_id: proj.id, project_index: 3, image_file: File.new("#{Rails.root}/images/files/04.jpg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "Frenchie", user_id: User.find_by( username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/17.jpg") );
  Image.create( project_id: proj.id, project_index: 2, image_file: File.new("#{Rails.root}/images/files/01.jpg") );
  Image.create( project_id: proj.id, project_index: 3, image_file: File.new("#{Rails.root}/images/files/04.jpg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "Prankster", user_id: User.find_by( username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/18.jpg") );
  Image.create( project_id: proj.id, project_index: 2, image_file: File.new("#{Rails.root}/images/files/01.jpg") );
  Image.create( project_id: proj.id, project_index: 3, image_file: File.new("#{Rails.root}/images/files/04.jpg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "Love", user_id: User.find_by(username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/19.jpg") );
  Image.create( project_id: proj.id, project_index: 2, image_file: File.new("#{Rails.root}/images/files/01.jpg") );
  Image.create( project_id: proj.id, project_index: 3, image_file: File.new("#{Rails.root}/images/files/04.jpg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "WinterMan", user_id: User.find_by( username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/20.jpg") );
  Image.create( project_id: proj.id, project_index: 2, image_file: File.new("#{Rails.root}/images/files/01.jpg") );
  Image.create( project_id: proj.id, project_index: 3, image_file: File.new("#{Rails.root}/images/files/04.jpg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "AlbumCover", user_id: User.find_by( username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/21.jpg") );
  Image.create( project_id: proj.id, project_index: 2, image_file: File.new("#{Rails.root}/images/files/01.jpg") );
  Image.create( project_id: proj.id, project_index: 3, image_file: File.new("#{Rails.root}/images/files/04.jpg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "Running", user_id: User.find_by( username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/22.jpg") );
  Image.create( project_id: proj.id, project_index: 2, image_file: File.new("#{Rails.root}/images/files/01.jpg") );
  Image.create( project_id: proj.id, project_index: 3, image_file: File.new("#{Rails.root}/images/files/04.jpg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "Giraffe", user_id: User.find_by( username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/23.jpg") );
  Image.create( project_id: proj.id, project_index: 2, image_file: File.new("#{Rails.root}/images/files/01.jpg") );
  Image.create( project_id: proj.id, project_index: 3, image_file: File.new("#{Rails.root}/images/files/04.jpg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "Broken", user_id: User.find_by( username: "batman" ).id);

  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/24.jpg") );
  Image.create( project_id: proj.id, project_index: 2, image_file: File.new("#{Rails.root}/images/files/01.jpg") );
  Image.create( project_id: proj.id, project_index: 3, image_file: File.new("#{Rails.root}/images/files/04.jpg") );
  proj.update(cover_image: cov.image_file.url)

proj = Project.create(title: "Stars", user_id: User.find_by(username: "batman" ).id);

proj = Project.create(title: "Stars", user_id: User.find_by(username: "Guest" ).id);


  cov = Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/25.jpg") );
  Image.create( project_id: proj.id, project_index: 2, image_file: File.new("#{Rails.root}/images/files/01.jpg") );
  Image.create( project_id: proj.id, project_index: 3, image_file: File.new("#{Rails.root}/images/files/04.jpg") );
  proj.update(cover_image: cov.image_file.url)

lastnames = [ "man", "guy", "friend", "feet", "troll", "potato", "ticklemonster", "thoughleader" ]
adjectives = [ "witty", "red", "honest", "tasty", "silly", "crazy", "lazy", "sleepy" ]
nouns = [ "Tree", "Velvet", "Table", "Glue", "Woods", "Steel", "Baby", "lien" ]

50.times do
  lastnames = [ "man", "guy", "friend", "feet", "troll", "potato", "ticklemonster", "thoughleader" ]
  adjectives = [ "witty", "red", "honest", "tasty", "silly", "crazy", "lazy", "sleepy" ]
  nouns = [ "Tree", "Velvet", "Table", "Glue", "Woods", "Steel", "Baby", "lien" ]
  username = adjectives[rand( 0..adjectives.length - 1 )] +nouns[rand( 0..nouns.length - 1 )] + lastnames[rand( 0..lastnames.length - 1 )]
  while( User.find_by({ username: username }) )
    username = adjectives[rand( 0..adjectives.length - 1 )] +nouns[rand( 0..nouns.length - 1 )] + lastnames[rand( 0..lastnames.length - 1 )]
  end
  @user = User.create({ username: username, password: username + "password" })
  @guest.follow( @user.id ) if rand(1..8) == 4
  rand( 1..10 ).times do |number|
    titleBegin = [ "purple", "nice", "rainy", "uplifting", "wonderful", "magic", "salty", "fresh", "wonderful" ].sample
    titleEnd = [ "nice-nice", "chicken-poo", "man-child", "bed fast", "troubleMaker"].sample
    @project = Project.create(title: "#{titleBegin} #{titleEnd}", user_id: @user.id);
    projectNumb = rand( 1..97 )
    second = projectNumb + 1
    third = projectNumb + 2
    projectNumb = "0" + projectNumb.to_s if projectNumb < 10
    second = "0" + second.to_s if second < 10
    third = "0" + third.to_s if third < 10
    cov = Image.create( project_id: @project.id, project_index: 1, image_file: File.new("#{Rails.root}/images/files/#{projectNumb}.jpg") );
    Image.create( project_id: @project.id, project_index: 2, image_file: File.new("#{Rails.root}/images/files/#{second}.jpg") );
    Image.create( project_id: @project.id, project_index: 2, image_file: File.new("#{Rails.root}/images/files/#{third}.jpg") );
    @project.update( cover_image: cov.image_file.url );
  end
end



User.find_by({ username: "" })
