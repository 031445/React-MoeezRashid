import React from 'react';
import {useEffect , useState} from 'react';


const List =  ()=>{
    const [cardData, setCardData]=useState([])
const fetchData = async ()=>{
    try{
        let FetchUrl = await fetch('https://jsonplaceholder.typicode.com/posts')
        let responce = await FetchUrl.json()
        let data = responce
        setCardData(data)
        console.log(data)
    }
    catch(e){
        console.log("we got error:",e)
    }
}

    useEffect(()=>{
      fetchData()
    },[])

return(
    

            <span>this is a  span</span>
       
   
)

}

export default List;