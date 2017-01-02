class Api::ProjectsController < ApplicationController
  def index
    if params[:date]
      @date = params[:date]
    else
      @date = Time.now.utc.to_s(:db)
    end
    if params[:userId]
      @user = User.find(params[:userId])
      @projects = Project.personal( @date, @tags, @user )
      render json: @projects

    else
      @user = current_user
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
        @projects = Project.personal( @date, @tags, @user )
        render json: @projects
      else
        @projects = Project.index( @date, @tags )
        render json: @projects
      end
    end

  end

  def show
    @project = Project.includes(:images).where("projects.id = ?", params[:id]).first
    @images = @project.images.map{ |el| { url: el.image_file.url, index: el.project_index } }
    @user = User.find(@project.user_id)
    render json: { cover: @project, images: @images, user: @user }
  end

  def create
    @images = params[:images]
    @title = params[:title]
    @user = params[:user]
    @project = Project.create( title: @title, user_id: @user[:id] )
    if @project[:id]
      @images.each_with_index do |image, index|
        Image.create( project_id: @project[:id], project_index: index, image_file: image )
      end
      @project.update({ cover_image: @project.images.first.image_file.url })
      @project_images = @project.images.map{ |el| { url: el.image_file.url, el: el } }
      render json: { project: @project, images: @project_images }
    else

    end
  end

  def edit
    @project = Project.find(params[:id])
    if params[:el] && params[:el][:el] && params[:el][:el][:id]
      @cover_image = Image.find( params[:el][:el][:id] )
    end
    @project.update({ cover_image: @cover_image.image_file.url });
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
    params.permit(:title, :user, :cover_image, :images)
  end
end
