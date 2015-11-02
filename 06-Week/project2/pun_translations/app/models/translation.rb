class Translation < ActiveRecord::Base
  belongs_to :user
  belongs_to :pun
end
