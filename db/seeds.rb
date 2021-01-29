games = Game.create([
    {
        sport: "Football",
        gender: "Boys",
        level: "Varsity",
        home_team: "Paint Valley",
        visiting_team: "Adena",
        max_capacity: "1000",
        location: "Paint Valley High School",
        event_date: Date.new(2020, 9, 1),
        event_time: Time.now,
        price: 500
    },

    {
        sport: "Football",
        gender: "Boys",
        level: "Varsity",
        home_team: "Paint Valley High School",
        visiting_team: "Unioto",
        max_capacity: "1000",
        location: "Paint Valley",
        event_date: DateTime.new(2020, 9, 8),
        event_time: Time.now,
        price: 500
    },
    {
        sport: "Volleyball",
        gender: "Girls",
        level: "JV",
        home_team: "Paint Valley",
        visiting_team: "Piketon",
        max_capacity: "270",
        location: "Paint Valley Middle School",
        event_date: DateTime.new(2020, 9, 5),
        event_time: Time.now,
        price: 700
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

schools = School.create([
    {
      school_name: 'Paint Valley',
      mascot: 'Bearcats',
      school_address: '7454 US Rt 50, Bainbridge, OH 45612',
      logo_location: '/logos/Paint_Valley.jpg'
    },
    {
        school_name: 'Adena',
        mascot: 'Warriors',
        school_address: '3367 Co Rd 550, Frankfort, OH 45628',
        logo_location: '/logos/Adena.png'
    },
    {
        school_name: 'Piketon',
        mascot: 'Readstreaks',
        school_address: '1414 Piketon Rd, Piketon, OH 45661',
        logo_location: '/logos/Piketon.png'
    }
])
