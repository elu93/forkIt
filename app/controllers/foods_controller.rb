class FoodsController < ApplicationController
    def index
        @foods = Food.all
        render json: @foods
    end
        
    def show
        @foods = Food.find(params[:id])
        render json: @foods 
    end
    
    def create
        @foods = Food.create!(foods_params)
        redirect_to "/cities/#{@foods.id}" 
    end
    
    def update
        @food = Food.find(params[:id])
        @food.update!(food_params)
        render json: @food
    end
    
    def destroy
        @food = Food.find(params[:id]).delete
        render status: :ok
    end
    
    private
    def foods_params
        params.require(:food).permit(:name, :Food_url)
    end
end
