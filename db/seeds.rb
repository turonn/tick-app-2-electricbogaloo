games = Game.create([
    {
        sport: "Football",
        gender: "boys",
        level: "Varsity",
        home_team: "Paint Valley",
        visiting_team: "Adena",
        max_capacity: "1000",
        event_date: DateTime.new(2020, 9, 1),
        price: 500,
    },

    {
        sport: "Football",
        gender: "boys",
        level: "Varsity",
        home_team: "Paint Valley",
        visiting_team: "Unioto",
        max_capacity: "1000",
        event_date: DateTime.new(2020, 9, 8),
        price: 500,
    },
    {
        sport: "Volleyball",
        gender: "girls",
        level: "JV",
        home_team: "Paint Valley",
        visiting_team: "Piketon",
        max_capacity: "270",
        event_date: DateTime.new(2020, 9, 5),
        price: 700,
    }
])

users = User.create([
    {
        first_name: "Greatest",
        last_name: "Ever",
        email: "my@email.com",
        password: "password1",
        created_at: DateTime.new(2021,1,7),
        updated_at: DateTime.new(2021,1,7)
    },
    {
        first_name: "Jeorge",
        last_name: "Simpilton",
        email: "jeo@email.com",
        password: "pas3wrid",
        created_at: DateTime.new(2021,1,7),
        updated_at: DateTime.new(2021,1,7)
    }
])

tickets = Ticket.create([
    {
        game: games.first,
        user: users.first,
        used: false
    },
    {
        game: games.first,
        user: users.second,
        used: false
    }
])
