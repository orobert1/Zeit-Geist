# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create( username: "batman", password: "batmans" );
Project.create(title: "Nike", user_id: User.find_by( username: "batman" ).id);
Image.create( project_id: Project.find_by( title: "Nike" ).id, project_index: 1, image_file: "https://s3.amazonaws.com/zeitgeist-dev/images/image_files/000/000/350/original/4b2d9b41524171.57a9bc7c016f6.jpg?X-Amz-Date=20160928T222016Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=69404434cb99cade88d3fe13cc98d0bbe3be1198bbb8d74f1ce53b3300eeddb2&X-Amz-Credential=ASIAJW7LK7SM7ZZFAJ3Q/20160928/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=FQoDYXdzEB8aDDROBAW1FVTe4fxyTyL6ARKCq85iwJLmemV0IKh8SosyH9z0BJqNIQsVYktPCXbecV0yHxCdfKh/YHr5Q7H2NNWLzhpa0y%2B9j4HJo2Za8hBt0ZXjw01V05z1pnU9eQplkhB/C%2Bz4Zzq4d7rH%2BECgK4PQwuqzf7DhQs2mjsKq3p2v0vJAbjCuXtcPtV2vp83qJmgkQ/QbudMw%2B4FBJaborso9xmAynxD3PLJWbsE5c3yxg1jUYdxXbfRTXHmUfcg2CslhC2rebZF8bNcZtMLHOti84PTCDNucff2boLzNu4gqMKqaXNB4OCLdY1S5XaAsk5J3ku8S%2BF8Cey2nzge/MUBSoyLIus9J1oAonoKxvwU%3D" );
Project.create(title: "Football", user_id: User.find_by( username: "batman" ).id);
Project.create(title: "FunStuff", user_id: User.find_by( username: "batman" ).id);
Project.create(title: "Project 1", user_id: User.find_by( username: "batman" ).id);
Project.create(title: "Goodguy", user_id: User.find_by( username: "batman" ).id);
Project.create(title: "Frenchie", user_id: User.find_by( username: "batman" ).id);
Project.create(title: "Prankster", user_id: User.find_by( username: "batman" ).id);
Project.create(title: "Love", user_id: User.find_by(username: "batman").id);
Project.create(title: "WinterMan", user_id: User.find_by( username: "batman" ).id);
Project.create(title: "AlbumCover", user_id: User.find_by( username: "batman" ).id);
Project.create(title: "Running", user_id: User.find_by( username: "batman" ).id);
Project.create(title: "Giraffe", user_id: User.find_by( username: "batman" ).id);
Project.create(title: "Broken", user_id: User.find_by( username: "batman" ).id);
Project.create(title: "Stars", user_id: User.find_by(username: "batman").id);
