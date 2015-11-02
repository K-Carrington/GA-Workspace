class AddPunsToTranslations < ActiveRecord::Migration
  def change
    add_reference :translations, :pun, index: true, foreign_key: true
  end
end
