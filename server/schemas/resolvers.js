const {Book, User } = require("../models")

const resolvers = {
    Query: {
        books: async () => {
            return await Book.find({})
        },
        // users: async () => {
        //     return await User.find({}).populate('savedBooks')
        // },
        // user: async(parent, args) => {
        //     return await User.findById(args.id || args.username);
        // }
    },
}
//     Mutation: {
//         addUser: async(parent, {username, email, password}) => {
//             return await User.create({username, email, password})
//         },
//         removeBook: async (parent, {bookId}) => {
//             return Book.findOneAndDelete({_id: bookId})
//         },
//         saveBook: async (parent, { userId, book}) => {
//             return User.findOneAndUpdate(
//                 { _id: userId},
//                 {
//                     $addToSet: { savedBooks: book},
//                 },
//                 {
//                     new: true, 
//                     runValidators: true,
//                 }
//             )
//         },
//     }
// }

module.exports = resolvers