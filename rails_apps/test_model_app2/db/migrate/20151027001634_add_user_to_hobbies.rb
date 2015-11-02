class AddUserToHobbies < ActiveRecord::Migration
  def change
    add_reference :hobbies, :user, index: true
    add_foreign_key :hobbies, :users
  end
end
