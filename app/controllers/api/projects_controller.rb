class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.includes(:user)
    .where("created_at > ?",params[:date])
    .order("created_at DESC")
    .limit(10)
    @projects = @projects.map{|el| {user: el.user,project: el}}
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

  def destroy
    @project = Project.find(params[:id]);
    @project.images.each{|el| el.destroy}
    @project.descriptions.each{|el| el.destroy}
    @project.destroy
    render json: @project

  end

  private

  def project_params
    params.permit(:title, :user_id, :cover_image, :margin_left, :width, :margin_top)
  end
end
