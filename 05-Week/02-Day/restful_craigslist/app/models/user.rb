class User < ActiveRecord::Base
	def password=(unencrypted_password)
	  # hash pw here
	  @password = unencrypted_password
      self.password_digest = BCrypt::Password.create(unencrypted_password)
	end

	def authenticate(unencrypted_password)
		if BCrypt::Password.new(self.password_digest) == unencrypted_password
			return self
		else
			false
		end
	end
end
