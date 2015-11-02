class MoviesController < ApplicationController
  def index
    #@first_user = User.first
    @movies = Movie.all
    #@movies_for_1st = Movie.where({user_id:@first_user.id})
  end

  def show
    @movie = Movie.find(params[:id])

    #@movie = Movie.where({user_id:params[:user]}) #if user id input
    #@user_id = User.where({name:params[:user]})
    #@movie = Movie.where({user_id:@user_id})
    #or
    #@user = User.find_by({name:params[:user]})
    #@movie = Movie.where({user_id:@user.id})
  end

  def new
    @new_movie = Movie.new
  end

  def create
    # save movie
    @movie = Movie.new(movie_params) #see private method below
    if @movie.save
      # display all movies
      redirect_to(action:'index') # or redirect_to('/')
    else
      redirect_to(action:'new') # or render new
    end
  end

  def edit
    @movie = Movie.find(params[:id])
  end

  def update
    @movie = Movie.find(params[:id])
    if @movie.update(movie_params) #see private method below
      # display all movies
      redirect_to(action:'index') # or redirect_to('/')
    else
      redirect_to(action:'edit') # or render edit
    end
  end

  def destroy
    @movie = Movie.find(params[:id])
    if @movie.destroy
      redirect_to('/')
    else
      render 'show'
    end
  end

  private
  def movie_params
    params.require(:movie).permit([:title, :release_date])
  end
end
