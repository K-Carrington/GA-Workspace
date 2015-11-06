class VotesController < ApplicationController
  def create
    @user = current_user
    @user.num_points += 1
    @user.save

    @pun = Pun.find(params[:id])  
    @vote = Vote.new
    @vote.user = current_user
    @vote.pun = @pun
    @vote.save
    redirect_to('/')
  end

  def destroy
  	@user = current_user
    @user.num_points -= 1
    @user.save

    @pun = Pun.find(params[:id])
  	@vote = Vote.find_by pun_id: @pun.id, user_id: current_user.id
    @vote.destroy
    redirect_to('/')
  end
end


    
    

