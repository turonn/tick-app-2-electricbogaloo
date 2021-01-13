class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
    t.string "sport"
    t.string "gender"
    t.string "level"
    t.string "home_team"
    t.string "visiting_team"
    t.string "location"
    t.integer "max_capacity"
    t.date "event_date"
    t.time "event_time"
    t.integer "price"
    end
  end
end
