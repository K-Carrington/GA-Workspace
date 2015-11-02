class SessionsController < ApplicationController
	def new
      
	end

	def create
      @user = User.find_by(email: params[:login][:email])
      if @user && @user.authenticate(params[:login][:password])
      	#set a session logged in cookie
      	session[:user_id] = @user.id.to_s
      	redirect_to users_path
      else
      	#go back to login screen
      	redirect_to login_path
      end
	end

	def destroy
		session.delete(:user_id)
		redrect_to login_path
	end
end
