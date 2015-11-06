class User < ActiveRecord::Base
  has_secure_password
  validates :email, presence: true, uniqueness: true

  has_many :puns
  has_many :translations
  has_many :votes, dependent: :destroy

  def already_voted_for?(pun)
    self.votes.where("pun_id = #{pun.id}").count > 0
  end
end
