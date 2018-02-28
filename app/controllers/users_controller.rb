class UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users
    end
        
    def show
        @users = User.find(params[:id])
        render json: @users 
    end
    
    def create
        @users = User.create!(users_params)
        redirect_to "/users/#{@users.id}" 
    end
    
    def update
        @user = User.find(params[:id])
        @user.update!(user_params)
        render json: @user
    end
    
    def destroy
        @user = User.find(params[:id]).delete
        render status: :ok
    end
    
    private
    def foods_params
        params.require(:user).permit(:name, :Food_url)
    end
end
