class AddUserToPuns < ActiveRecord::Migration
  def change
    add_reference :puns, :user, index: true, foreign_key: true
  end
end
