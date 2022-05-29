const db = require('../config/connection')
const User = require('../models/User')
const Book = require('../models/Book')

const userData = require('./user.json')
const bookData = require('./book.json')

db.once('open', async () => {
    await User.deleteMany({})
    await Book.deleteMany({})

    const users = await User.insertMany(userData)
    const books = await Book.insertMany(bookData)

    console.log("Books and users seeded")
    process.exit(0)
    
})