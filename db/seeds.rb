# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create( username: "batman", password: "batmans" );
Project.create(title: "Nike", user_id: User.find_by( username: "batman" ));
Project.create(title: "Football", user_id: User.find_by( username: "batman" ));
Project.create(title: "FunStuff", user_id: User.find_by( username: "batman" ));
Project.create(title: "Project 1", user_id: User.find_by( username: "batman" ));
Project.create(title: "Goodguy", user_id: User.find_by( username: "batman" ));
Project.create(title: "Frenchie", user_id: User.find_by( username: "batman" ));
Project.create(title: "Prankster", user_id: User.find_by( username: "batman" ));
Project.create(title: "Love", user_id: User.find_by(username: "batman"));
