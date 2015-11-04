class PunsController < ApplicationController
  def index
    @puns = Pun.all.order("created_at DESC")
  end

  def show
    @pun = Pun.find(params[:id])
  end

  def new
    @pun = Pun.new
  end

  def create
    @pun = Pun.new(pun_params)
    #TBD need to get user_id in here before saving
    @pun.user_id = current_user.id
    @pun.rating = 0
    if @pun.save
      redirect_to '/'
    else
      render 'new'
    end
  end

  def edit
    @pun = Pun.find(params[:id])
  end

  def update
    @pun = Pun.find(params[:id])

    if @pun.update(pun_params)
      redirect_to '/'
    else
      render 'edit'
    end
  end

  def destroy
    @pun = Pun.find(params[:id])
    if @pun.destroy
      redirect_to('/')
    else
      render 'show'
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pun
      @pun = Pun.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    # <new things go at the end, for attaching to another model list 
    # modelname_attributes: [:acceptable attrs] >
    def pun_params
      #params.require(:pun).permit(:body)
      params.require(:pun).permit(:pun, :language)
    end

end
