class Api::SessionsController < ApplicationController

  def show
    if current_user
      render json: current_user
    else
      render json: {}
    end
  end


	def create
		@user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

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
			render json: "No User logged in"
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
