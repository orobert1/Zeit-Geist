class Api::ImagesController < ApplicationController
  def create
    @image = Image.new(
      project_id: image_params[:project_id],
      project_index: image_params[:id],
      image_file: image_params[:image]
    )

    if @image.save
      render json: {id: @image.id, url:@image.image_file.url}
    else

      render json: @image
    end
  end

  def index
    @project = Project.find(params[:project_id]).images
    @project = @project.map{|proj| {id:proj.id, url:proj.image_file.url}}
    render json: @project
  end


  private

  def image_params
    params.require(:image).permit(:id, :project_id, :image)
  end
end
