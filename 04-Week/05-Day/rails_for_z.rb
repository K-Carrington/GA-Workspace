$ Zombie.find(1)
#<Zombie id: 1, name: "Ashley", graveyard: "Glen Haven Memorial Cemetery">
#Successfully found Zombie where ID = 1.

Zombie.create(id: 4, name: "bla", graveyard: "lll")

Zombie.last # returns last hash

Zombie.order(:name) # orders by name

#To update
z = Zombie.find(3)
z.graveyard = "Benny Hills Memorial"
z.save

#to destroy based in id
Zombie.destroy(3)

