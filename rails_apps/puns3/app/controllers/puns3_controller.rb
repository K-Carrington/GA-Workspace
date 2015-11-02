class Puns3Controller < ApplicationController
  def index
    #@first_user = User.first
    @puns = Pun.all
    #@movies_for_1st = Movie.where({user_id:@first_user.id})
  end

  def show
    @pun = Pun.find(params[:id])

    #@movie = Movie.where({user_id:params[:user]}) #if user id input
    #@user_id = User.where({name:params[:user]})
    #@movie = Movie.where({user_id:@user_id})
    #or
    #@user = User.find_by({name:params[:user]})
    #@movie = Movie.where({user_id:@user.id})
  end

  def new
    @new_pun = Pun.new
  end

  def create
    # save movie
    @pun = Pun.new(pun_params) #see private method below
    if @movie.save
      # display all movies
      redirect_to(action:'index') # or redirect_to('/')
    else
      redirect_to(action:'new') # or render new
    end
  end

  def edit
    @pun = Pun.find(params[:id])
  end

  def update
    @pun = Pun.find(params[:id])
    if @pun.update(pun_params) #see private method below
      # display all movies
      redirect_to(action:'index') # or redirect_to('/')
    else
      redirect_to(action:'edit') # or render edit
    end
  end

  def destroy
    @pun = Pun.find(params[:id])
    if @movie.destroy
      redirect_to('/')
    else
      render 'show'
    end
  end

  private
  def pun_params
    params.require(:pun).permit([:pun, :laugh_level])
  end
end

