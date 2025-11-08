const user = [
  { "id": 101, "name": "John Doe" },
  { "id": 202, "name": "Emma Smith" },
  { "id": 428, "name": "Liam Johnson" }
]


const posts = [
  { "id": 1, "userId": 101, "title": "Summer Collection Launch" },
  { "id": 2, "userId": 428, "title": "Monthly Sales Report" },
  { "id": 3, "userId": 101, "title": "Customer Feedback Summary" },
  { "id": 4, "userId": 428, "title": "New Arrival: Beachwear" },
  { "id": 5, "userId": 428, "title": "Discount Campaign Q4" }
]


const postUserById = posts.reduce((table, post) => {
    const {userId} = post;

    // console.log(userId)

    if(!table[userId]){
        table[userId] = []
    }

    table[userId].push(post);

    return table;
}, {})

// console.log(postUserById)


const userWithPost = user.map((user) => {
    return {
        ...user, 
        posts: postUserById[user.id] || []
    }
})


// console.log(userWithPost)
console.log(JSON.stringify(userWithPost))