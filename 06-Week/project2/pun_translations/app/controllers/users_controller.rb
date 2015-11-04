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
    #if user_id_is_params_id?
    if current_user.id.to_s == params[:id].to_s
    @user = User.find(session[:user_id])
    else
      redirect_to root_path
    end
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
    if user_id_is_params_id?
      @user = User.find(params[:id])

      #@user.puns.destroy #do I need puns pointer in users? do I want to destroy them?
      @user.destroy
      redirect_to logout_path
    else
      redirect_to root_path
    end
  end

  def confirm_destroy
    redirect_to root_path unless user_id_is_params_id?
  end

 private
   def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
   end

end



    

