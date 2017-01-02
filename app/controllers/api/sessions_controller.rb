class Api::SessionsController < ApplicationController

  def show
    if logged_in?
      render json: current_user
    else
      render json: {}
    end
  end


	def create
    if params[:user]  && params[:user][:username]
  		@user = User.find_by_credentials(
        params[:user][:username],
        params[:user][:password]
      )
    end

    if @user || current_user
			login(@user)
			render json: current_user
		else
			render(
        json: {
          base: ["Invalid username/password combination"]
        },
        status: 401
      )
		end
	end

	def destroy
		@user = current_user
		if @user
			logout
      render json: @user
		else
			render(
        json: {
          base: ["Nobody signed in"]
        },
        status: 404
      )
		end
	end

end
