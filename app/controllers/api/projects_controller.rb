class Api::ProjectsController < ApplicationController
  def create
    @project = Project.new(project_params)
    if @project.save
      render json: @project
    else
      render json: @project.errors.full_messages
    end
  end

  def update
    @project = Project.update(params[:id],cover_image: project_params[:cover_image])
    debugger
    render json: @project
  end

  private

  def project_params
    params.permit(:title, :user_id, :cover_image)
  end
end
