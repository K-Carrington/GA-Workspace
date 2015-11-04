class Pun < ActiveRecord::Base
  belongs_to :user
  has_many :translations, dependent: :destroy
  has_many :votes, dependent: :destroy

  #Tony's
  def date_published
      created_at.localtime.strftime("%A, %B %-d, %Y at %l:%M %p")
  end
end
