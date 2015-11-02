class CreateTranslatedPuns < ActiveRecord::Migration
  def change
    create_table :translated_puns do |t|
      t.string :pun
      t.string :language

      t.timestamps null: false
    end
  end
end
