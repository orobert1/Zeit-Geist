class Api::ProjectsController < ApplicationController
  def index
    if params[:date]
      @date = params[:date]
    else
      @date = Time.now.utc.to_s(:db)
    end

    if params[:filter] && params[:filter][:tags]
      @tags = params[:filter][:tags]
    else
      @tags = nil
    end

    if params[:filters]
      @filter = params[:filters]
    end

    if @filter == "Public"
      @projects = Project.index( @date, @tags )
      render json: @projects
    elsif @filter == "Following"
      @projects = Project.following( @date, @tags, current_user )
      render json: @projects
    elsif @filter == "Personal"
      @projects = Project.personal( @date, @tags, current_user )
      render json: @projects
    else
      @projects = Project.index( @date, @tags )
      render json: @projects
    end

  end

  def show
    @project = Project.includes(:images).where("projects.id = ?", params[:id]).first
    @images = @project.images.map{ |el| { url: el.image_file.url, index: el.project_index } }
    @user = User.find(@project.user_id)
    render json: { cover: @project, images: @images, user: @user }
  end

  def create
    debugger
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
