class Pun < ActiveRecord::Base
  belongs_to :user
  has_many :translations, dependent: :destroy
  has_many :votes, dependent: :destroy
end
