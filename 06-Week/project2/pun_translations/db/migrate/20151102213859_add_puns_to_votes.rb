class AddPunsToVotes < ActiveRecord::Migration
  def change
    add_reference :votes, :pun, index: true, foreign_key: true
  end
end
