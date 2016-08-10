class Api::ProjectsController < ApplicationController
  def index

    a = Project.includes(:user).take(params[:max])
    @projects = a.map{|proj| {project: proj, username: proj.user.username}}
    render json: @projects
  end

  def show
    @project = Project.find(params[:id]);
    render json: @project
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      render json: @project
    else
      render json: @project.errors.full_messages
    end
  end

  def update
    @project = Project.update(params[:id],project_params)
    render json: @project
  end

  private

  def project_params
    params.permit(:title, :user_id, :cover_image, :margin_left, :width, :margin_top)
  end
end
