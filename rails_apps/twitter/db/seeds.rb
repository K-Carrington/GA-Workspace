# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
if User.destroy_all
  usernames = ['Kristin', 'John', 'Sean', 'Phillipe', 'Stephanie']
  bio = 'Loves whiskey, kitties and jump-rope! L.A. native foodie wunderlust!'
  usernames.each do |u| 
    User.create({username: u, bio: bio})
  end
end