class UsersController < ApplicationController
  def index
  	@users = User.all # in reality grab only 1st 100

  end

  def show
    @user = User.find(params[:id])
    # or
    # @user = User.find_by(username: "Kristin")
    # or
    # @user = User.find_by_username("Kristin")
  end
end
