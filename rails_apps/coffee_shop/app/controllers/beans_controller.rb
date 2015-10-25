class BeansController < ApplicationController
  def index
  end

  def show
  end

  def edit
  end

  def new
  	@bean = Bean.new
  	@bean.roast = 'light'
  	@bean.cost = 0.01
  end
end
