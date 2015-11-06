class TranslationsController < ApplicationController
  def index 
  end
  
  def new
    @translation = Translation.new
  end

  #for typed in translations
  def create
    pun = Pun.find(params[:pun_id])   
    @translation = pun.translations.create(translation_params)
    @translation.user = current_user
    @translation.save
    redirect_to pun_path(@translation.pun)
  end

  #for auto generated translations
  # remember to do bundle and restart server to not have to require any files
  def translate
    pun = Pun.find(params[:id])
    @translation = Translation.new
    translator = BingTranslator.new('GA_Project2_Pun_Translatons', 
        '12pMXD2r+5NfM1T+im/7HYYN4IV8ZLXPxyxX+hc+z7Y=')
    @translation.translated_pun = translator.translate(pun.pun, 
      :to => current_user.native_language.downcase.parameterize.to_sym) #check to symbol conversion
    @translation.user = current_user
    @translation.pun = pun
    @translation.language = current_user.native_language
    @translation.comments = "This is an auto generated translation, balance = " + translator.balance 
    @translation.save
    redirect_to pun_path(@translation.pun)
  end

  def edit
    @translation = Translation.find(params[:id])
  end

  def update
    @translation = Translation.find(params[:id])
    @translation.update(translation_params)
    redirect_to pun_path(@translation.pun)
  end

  def destroy
    @translation = Translation.find(params[:id])
    @translation.destroy
    redirect_to pun_path(@translation.pun)
  end

private
  def translation_params
      params.require(:translation).permit(:translated_pun, :language, :comments)
    end
end
