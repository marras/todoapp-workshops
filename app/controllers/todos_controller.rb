class TodosController < ApplicationController
  skip_before_action :verify_authenticity_token # do not do this normally ;)

  def index
    @todos = Todo.all.order(:id)
    render json: { todos: @todos }
  end

  def create
    Todo.create(params.require(:todo).permit(:name, :done))
  end

  def destroy
    Todo.destroy(params[:id])
  end

  def update
    @todo = Todo.find(params[:id])
    @todo.update(done: params[:done])

    @todos = Todo.all.order(:id)
    render json: { todos: @todos }
  end
end
