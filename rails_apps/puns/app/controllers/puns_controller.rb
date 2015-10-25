class PunsController < ApplicationController
  def index
    @puns = @@database
  end

  def show
    @puns = @@database
    pun_id = params[:id].to_i
    @pun  = @@database[pun_id]
  end

  def edit
    @puns = @@database
  end

  def delete
    @@database.delete_at(params[:id].to_i)
    redirect_to('/')
  end

  def create
    @puns = @@database
    @pun = Puns.new(pun_params) 
    if @pun.save
      redirect_to '/puns'
    else
      render 'new'
    end
  end

  private
    def pun_params
    params.require(:message).permit(:content)
    end
end
