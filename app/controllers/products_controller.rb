class ProductsController < ApplicationController
  def index
    @products = Product.all
    render json: @products
  end

  def show
    @product = Product.find(params[:id])
    render json: @product
  end

  def create
    new_product = Product.new
    new_product.name = params[:new_product][:name]
    new_product.price = params[:new_product][:price]
    new_product.description = params[:new_product][:description]
    new_product.save!
    render json: new_product
  end
end
