class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render json:@users
  end

  def create
    @user = User.new(user_params)
    if @user.save!
      login(@user)
      render json: @user
    else
      render json:@user.errors.full_messages
    end
  end

  def update
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      render json: @user
    else
      render json: @user.errors.full_messages
    end
  end

  def destroy
    @user = User.find(params[:id])
    if @user
      @user.destroy
      render json: @user
    else
      render json: @user.errors.full_messages
    end
  end

  def show

    if params[:date]
      @date = params[:date]
    else
      @date = Time.now.utc.to_s(:db)
    end

    @projects = Project.includes(:user)
    .where("user_id = ? AND created_at > ?",
    params[:id],params[:date])
    .order("created_at ASC")
    .take(params[:payload_size])

    # @projects = @user.projects..


      render json: {user: @projects[0].user , projects: @projects}


  end


  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
