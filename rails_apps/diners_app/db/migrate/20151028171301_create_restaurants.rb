class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :location
      t.string :name
      t.string :cuisine
      t.string :rating

      t.timestamps null: false
    end
  end
end
