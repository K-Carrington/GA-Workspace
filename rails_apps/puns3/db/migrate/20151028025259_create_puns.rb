class CreatePuns < ActiveRecord::Migration
  def change
    create_table :puns do |t|
      t.string :pun
      t.integer :laugh_level

      t.timestamps null: false
    end
  end
end
