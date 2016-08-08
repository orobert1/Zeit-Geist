class Api::DescriptionsController < ApplicationController
  def create
    
    @description = Description.new(body: params[:text],
    project_index: params[:id],
    project_id: params[:project_index])
    if @description.save
      render json: @description
    else
      render json: @description.errors.full_messages
    end
  end
end
