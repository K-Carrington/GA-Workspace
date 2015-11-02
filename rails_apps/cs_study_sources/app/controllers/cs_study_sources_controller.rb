class CsStudySourcesController < ApplicationController
  def index
    @cs_study_sources = @@database
  end

  def show
    @cs_study_sources = @@database
    subject_id = params[:id].to_i
    @subject  = @@database[subject_id]
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def new
  end

  def create
  end
end
