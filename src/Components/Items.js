import React, {useState, useEffect} from 'react'
import axios from 'axios'
function Items() {

  

const [value, setValue] =  useState([])
const [loading, setLoading] =  useState(false)
    

useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(res => setValue(res.data))
  .catch(err => {
      console.log("Err test", err);
  }) 
  setLoading(true)
}, [] )

const skilsBar = value.map( item => {
    return(
        <div key={item.id} >
            <p>{item.id} || {item.title}</p>     
            <hr />
        </div>
    )

    
} )

const loadingrender =  (
        <div>
            <h1>Loading </h1>
        </div>
)


  
  return (
    <div className="App">
        {loading === true? <>{skilsBar}</>: <> {loadingrender}</>}
    </div>
  );
}

export default Items;
