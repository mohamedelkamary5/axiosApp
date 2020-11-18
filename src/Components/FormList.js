import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function FormList() {
    
    const [userId, setUserId] = useState(0)
    const [id, setId] = useState(0)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handelUserId = (e) => {setUserId(e.target.value)}
    const handelId = (e) => {setId(e.target.value)}
    const handelTitle = (e) => {setTitle(e.target.value)}
    const handelBody = (e) => {setBody(e.target.value)}

    const addItem = () => {
        const allItem = {userId: userId, id: id, title: title, body: body}
        axios.post(`https://jsonplaceholder.typicode.com/posts`, allItem)
            .then(res => {
                console.log("res", res.data);
            })
            .catch(err => {
                console.log('err', err);
            })
        console.log(allItem);
    }


    return (
        <div>
            <input name='userId' type='number' value={userId} placeholder='user id' onChange={handelUserId} />
            <input name='id' type='number' onChange={handelId} value={id} placeholder='id'/>
            <input name='title' type='text' onChange={handelTitle} value={title} placeholder='Title' />
            <input name='body' type='text' onChange={handelBody} value={body} placeholder='body' />
            <button onClick={addItem}>Add Item</button>
        </div>
    )
}


 