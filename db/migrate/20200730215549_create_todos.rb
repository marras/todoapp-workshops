class CreateTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :todos do |t|
      t.string :name
      t.boolean :done, default: false
    end
  end
end
