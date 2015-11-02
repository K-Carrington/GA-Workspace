class CreateFlowers < ActiveRecord::Migration
  def change
    create_table :flowers do |t|
      t.string :color
      t.boolean :smokable
      t.string :name

      t.timestamps null: false
    end
  end
end
