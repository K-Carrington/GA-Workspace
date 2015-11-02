class CreateTranslations < ActiveRecord::Migration
  def change
    create_table :translations do |t|
      t.string :language
      t.text :translated_pun
      t.text :comments

      t.timestamps null: false
    end
  end
end
