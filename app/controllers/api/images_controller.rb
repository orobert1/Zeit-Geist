class Api::ImagesController < ApplicationController
  def create
    @image = Image.new(
      project_id: image_params[:project_id],
      project_index: image_params[:id],
      image_file: image_params[:image]
    )
    if @image.save

      render json: @image
    else

      render json: @image
    end
  end


  private

  def image_params
    params.require(:image).permit(:id, :project_id, :image)
  end
end
