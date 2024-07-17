const mongoose = require("mongoose")


const Connection = async () => {
    try {
        const connect = await mongoose.connect("")
        console.log("mongo server got connected succssfully");
    } catch (e) {
        console.log("some error with mongoose connection");
    }
}


Connection()


const BookSchema = mongoose.Schema({
    book: { type: String, required: true },
    about: { type: String, required: true },
    url: { type: String, required: true }
})

const Book = mongoose.model('books', BookSchema)


module.exports = {
    Book
}