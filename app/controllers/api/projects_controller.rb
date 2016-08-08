class Api::ProjectsController < ApplicationController
  def create
    @project = Project.new(project_params)
    if @project.save
      render json: @project.id
    else
      render json: @project.errors.full_messages
    end
  end

  private

  def project_params
    params.permit(:title, :user_id)
  end
end
