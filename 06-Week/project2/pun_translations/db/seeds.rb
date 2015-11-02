# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#rake db:reload  # to erase and re-load seed data
user_1 = User.create({name: "Admin", email: "admin@admin.com", password: "password",
	password_confirmation: "password", is_admin: true, rank: 10, num_points: 100,
	native_language: "English"})

user_2 = User.create({name: "Test", email: "test@test.com", password: "test",
	password_confirmation: "test", is_admin: false, rank: 0, num_points: 0,
	native_language: "Japanese"})

pun_1 = Pun.create({pun: "", rating: 0, language: "Japanese", user_id: user_2.user_id})

pun_2 = Pun.create({pun: "", rating: 4, language: "English", user_id: user_1.user_id})

translation_1 = Translation.create({language: "English", translated_pun: "", 
	comments: "", user_id: user_2.user_id, pun_id: pun_1.pun_id})

vote_1 = ({pun_id: pun_1.pun_id, user_id: user_1.user_id})
vote_1 = ({pun_id: pun_2.pun_id, user_id: user_2.user_id})
vote_1 = ({pun_id: pun_2.pun_id, user_id: user_2.user_id})

