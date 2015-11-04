class VotesController < ApplicationController
  def create
    @pun = Pun.find(params[:id])  
    @vote = Vote.new

    @user = current_user
    @user.num_points += 1
    @user.save

    @vote.user = current_user
    @vote.pun = @pun
    @vote.save
    redirect_to('/')
    #if @vote.save
    #  redirect_to pun_path(@pun)
    #end
  end

  def destroy
  	@pun = Pun.find(params[:id]) 

  	@user = current_user
    @user.num_points -= 1
    @user.save

  	@vote = Vote.find_by pun_id: @pun.id, user_id: current_user.id
    #@vote = Vote.find(params[:id])
    @vote.destroy
    redirect_to('/')
    #if @vote.destroy
    #  redirect_to pun_path(@pun)
    #end
  end
end


    
    

