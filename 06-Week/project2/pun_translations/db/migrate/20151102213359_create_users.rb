class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.boolean :is_admin
      t.integer :rank
      t.integer :num_points
      t.string :native_language

      t.timestamps null: false
    end
  end
end
