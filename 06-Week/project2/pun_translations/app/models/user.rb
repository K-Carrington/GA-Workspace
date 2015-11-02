class User < ActiveRecord::Base
  has_secure_password
  validates :email, presence: true, uniqueness: true

  has_many :puns, dependent: :destroy
  has_many :translations, dependent: :destroy
  has_many :votes, dependent: :destroy
end
