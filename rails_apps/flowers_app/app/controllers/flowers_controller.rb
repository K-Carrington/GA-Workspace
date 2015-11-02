class FlowersController < ApplicationController
  def index
    @flowers = Flower.all
  end

  def show
    @flower = Flower.find(params[:id])
  end

  def new
  end

  def create
    @flower = Flower.new(flower_params)

    if @flower.save
      redirect_to('/')
    else
      render 'new'
    end
  end

  def destroy
    @flower = Flower.find(params[:id])

    if @flower.destroy
      redirect_to('/')
    else
      render 'show'
    end
  end

  def edit
    @flower = Flower.find(params[:id])
  end

  def update
    @flower = Flower.find(params[:id])

    if @flower.update(flower_params)
      redirect_to('/')
    else
      render 'edit'
    end
  end
  
  private
  def flower_params
    params.require(:flower).permit([:name, :color, :smokable])
  end
end
