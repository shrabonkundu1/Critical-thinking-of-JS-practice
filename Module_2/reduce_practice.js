const fakeProducts = [
  {
    "id": 1,
    "name": "Wireless Mouse",
    "price": 850,
    "quantity": 12
  },
  {
    "id": 2,
    "name": "Mechanical Keyboard",
    "price": 2450,
    "quantity": 7
  },
  {
    "id": 3,
    "name": "Gaming Headset",
    "price": 1950,
    "quantity": 10
  },
  {
    "id": 4,
    "name": "USB-C Charger",
    "price": 1250,
    "quantity": 15
  },
  {
    "id": 5,
    "name": "Laptop Stand",
    "price": 1750,
    "quantity": 9
  }
]

const totalPrice = fakeProducts.reduce((subTotal, item) => {
    return subTotal + item.price*item.quantity; 
}, 0);


console.log("totalPrice",totalPrice)


const playerScoreer = [
  {
    "id": 1,
    "name": "Sakib Al Hasan",
    "score": 85
  },
  {
    "id": 2,
    "name": "Tamim Iqbal",
    "score": 72
  },
  {
    "id": 3,
    "name": "Mushfiqur Rahim",
    "score": 64
  },
  {
    "id": 4,
    "name": "Mahmudullah Riyad",
    "score": 48
  },
  {
    "id": 5,
    "name": "Litton Das",
    "score": 90
  }
]


const bestScoreer = playerScoreer.reduce((bestPlayer, player) =>{
    if(bestPlayer.score > player.score){
        return bestPlayer
    }
    console.log(bestPlayer,player)
    return player;
}, playerScoreer[0])


console.log(bestScoreer)