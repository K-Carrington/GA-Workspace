# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#rake db:reset # to drop the whole Database and re-seed data

user_1 = User.create({name: "Admin", email: "admin@admin.com", password: "password",
	password_confirmation: "password", is_admin: true, rank: 10, num_points: 100,
	native_language: "English"})

user_2 = User.create({name: "Test", email: "test@test.com", password: "test",
	password_confirmation: "test", is_admin: false, rank: 0, num_points: 0,
	native_language: "Japanese"})

pun_1 = Pun.create({pun: "Suika wa yasuika", rating: 0, language: "Japanese", 
	user_id: user_2.id})

pun_2 = Pun.create({pun: "I wasn't originally going to get a brain transplant, but then I changed my mind.", 
	rating: 4, language: "English", user_id: user_1.id})

translation_1 = Translation.create({language: "English", translated_pun: "Are watermelons cheap?", 
	comments: "Makes Japanese people laugh", user_id: user_2.id, pun_id: pun_1.id})

vote_1 = ({pun_id: pun_1.id, user_id: user_1.id})
vote_1 = ({pun_id: pun_2.id, user_id: user_2.id})
vote_1 = ({pun_id: pun_2.id, user_id: user_2.id})

