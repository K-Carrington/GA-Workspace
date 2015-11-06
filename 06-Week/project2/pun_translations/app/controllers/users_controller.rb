class UsersController < ApplicationController
  before_action :authorize, except: [:new,:create,:show]

  def index
    @users = User.all.order("created_at DESC")
   end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new user_params
    @user.rank = 0
    @user.num_points = 0
    @user.is_admin = false
    if @user.save
     redirect_to new_session_path
    else
     render 'new'
    end
   end

  def edit
      @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      redirect_to user_path @user
    else
      redirect_to edit_user_path @user
    end
  end

  def destroy
    logout
    @user = User.find(params[:id])
    if @user.destroy
      redirect_to('/')
    end
  end

 private
   def user_params
    params.require(:user).permit(:name, :email, :native_language, :password, :password_confirmation)
   end

end



    

