class CreateSchools < ActiveRecord::Migration[6.0]
  def change
    create_table :schools do |t|
      t.string :school_name
      t.string :mascot
      t.string :school_address
      t.string :logo_location
    end
  end
end
