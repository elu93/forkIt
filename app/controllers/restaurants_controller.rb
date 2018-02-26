class RestaurantsController < ApplicationController
    def index
        @restaurants = Restaurant.all
        render json: @restaurants
    end
        
    def show
        @restaurants = Restaurant.find(params[:id])
        render json: @restaurants 
    end
    
    def create
        @restaurants = Restaurant.create!(restaurants_params)
        redirect_to "/cities/#{@restaurants.id}" 
    end
    
    def update
        @restaurant = Restaurant.find(params[:id])
        @restaurant.update!(restaurant_params)
        render json: @restaurant
    end
    
    def destroy
        @restaurant = Restaurant.find(params[:id]).delete
        render status: :ok
    end
    
    private
    def restaurants_params
        params.require(:restaurant).permit(:name, :restaurant_url)
    end
end
