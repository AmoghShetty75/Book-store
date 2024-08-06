import { useState,useEffect } from 'react'
import axios from 'axios'



function App() {
  const [count, setCount] = useState([])
  const [book, setBook] = useState()
  const [about, setAbout] = useState()
  const [url, setUrl] = useState()


    const getBook = async()=>{
    try{
          const res = await axios.get('http://localhost:3000/getBooks')
         const result = setCount(res.data.books)
  }catch(e){
      console.log(`error is ${e}`);

    }
  }

   async function addBook(){
    try{
      const post = await axios.post("http://localhost:3000/postBooks",{
        book,
        about,
        url
      })
  
      setBook(""),
      setAbout(""),
      setUrl(""),
      getBook(),
      alert("book added");

    }catch(e){
      console.log("Error posting the response");
    }
  }

  useEffect(() => {
    getBook()
  }, [])
  

  return (
    <>
      <input type="text" placeholder='Book' value={book} onChange={(e)=>setBook(e.target.value)}/> <br /> <br />
      <input type="text" placeholder='About'value={about} onChange={(e)=>setAbout(e.target.value)}/> <br /> <br />
      <input type="text" placeholder='image'value={url} onChange={(e)=>setUrl(e.target.value)}/> <br /> <br />
      <button onClick={addBook}>Add Books</button>
      <ul>
        {count.map(function(store){
        return  <li key={store._id}>
            <h1>Book Name :{store.book}</h1>
            <h2>Desc :{store.about}</h2>
            <img src={store.url}  width="300" height="200"></img>
          </li>
        })}
      </ul>
    </>
  )
}

export default App
