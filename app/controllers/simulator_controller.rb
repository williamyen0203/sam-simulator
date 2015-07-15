class SimulatorController < ApplicationController
  def index
    @foods = Simulator.all
  end

  def edit
    @food = Simulator.find(params[:id])
    @food.increment!(:amount)

    respond_to do |format|
      format.js
    end
  end
end
