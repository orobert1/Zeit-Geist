class Api::ProjectsController < ApplicationController
  def index
    if params[:date]
      @date = params[:date]
    else
      @date = Time.now.utc.to_s(:db)
    end

    if !params[:filters] || params[:filters] == "Public"
      @projects = Project.includes(:user)
      .where("created_at < ?", @date)
      .order("created_at DESC")
      .limit(30)
      @projects = @projects.map{|el| {user: el.user,project: el}}
      render json: @projects
    elsif params[:filters] == "Following"
      @projects = Project.includes(:user).joins(:followers)
      .where("users.id = ? AND projects.created_at < ? ", current_user.id, Time.now.to_s(:db))
      .order("created_at DESC").limit(30)
      @projects = @projects.map{|el|
        {user: el.user,project: el}
      }
      render json: @projects

    elsif params[:filters] == "Personal"

      @projects = current_user.projects
      .where("created_at < ?", @date)
      .order("created_at DESC")
      .limit(30)
      @projects = @projects.map{|el| {user: el.user,project: el}}
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
