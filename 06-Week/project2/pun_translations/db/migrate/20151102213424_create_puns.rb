class CreatePuns < ActiveRecord::Migration
  def change
    create_table :puns do |t|
      t.text :pun
      t.integer :rating
      t.string :language

      t.timestamps null: false
    end
  end
end
