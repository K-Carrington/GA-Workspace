class HobbiesController < ApplicationController
  def index
    @hobbies = Hobby.all
    @users = User.all
  end

  def show
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
