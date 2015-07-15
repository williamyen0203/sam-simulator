class CreateSimulators < ActiveRecord::Migration
  def change
    create_table :simulators do |t|
      t.text :food;
      t.integer :amount;

      # t.integer :oreo;
      # t.integer :sushi;
      # t.integer :shumai;

      t.timestamps null: false
    end
  end
end
