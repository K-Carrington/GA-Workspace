class TranslationsController < ApplicationController
  def index
    
  end

  def new
    @translation = Translation.new
  end

  def create
    #@translation = Translation.create(translation_params)
    #redirect_to '/puns/#{:pun_id}' #TBD want to go back to pun show either way

       pun = Pun.find(params[:id])
       translation = pun.translations.create(translation_params)
       translation.user = current_user
       translation.save
       redirect_to pun_path(translation.pun)
  end

  

  def edit
    @translation = Translation.find(params[:id])
  end

  def update

    @translation = Translation.update(params[:id])
    redirect_to pun_path(translation.pun)

    #if @translation.update(translation_params)
    #  redirect_to '/puns/#{:pun_id}' #TBD want to go back to pun show either way
    #else
    #  render 'edit'
    #end

  end

  def destroy
  end

private
  def translation_params
      #params.require(:translation).permit(:body)
      params.require(:pun).permit(:translated_pun, :language, :contents)
    end
end
