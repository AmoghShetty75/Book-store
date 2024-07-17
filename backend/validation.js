const zod = require("zod")

const mySchema = zod.object({
    book:zod.string(),
    about:zod.string(),
    url:zod.string().url()

})

module.exports ={
    mySchema
}