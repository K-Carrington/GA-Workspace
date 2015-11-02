# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Restaurant.create({name: 'Makku', location: 'Shibuya', cuisine: 'fasto', rating: 3})
Restaurant.create({name: 'Pie Hole', location: 'Traction Ave', cuisine: 'dessert', rating: 8})
Restaurant.create({name: 'Son of a Gun', location: '3rd St', cuisine: 'seafood', rating: 9})