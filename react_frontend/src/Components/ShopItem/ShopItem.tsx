import React, {useState, useEffect} from 'react'
import { Card } from '@mui/material';
import './ShopItem.css'
import { Link, useNavigate } from 'react-router-dom';

function ShopItem(props: any){
    let [url, setUrl] = useState("")
    const navigate = useNavigate();
    function handleNavigate(){
        navigate(url)
    }
    useEffect(() => {
        handleNavigate();
    }, [url])
    function handleClick(event: any){
        let urlBefore = "/store" + (event.target as HTMLInputElement).src
        let parts = urlBefore.split("/")
        let endPart = parts[parts.length-1]
        let targetUrl = endPart.slice(0, endPart.indexOf("."))
        setUrl(targetUrl)
    }

    return ( 
        <Card>
            
            <img src={`./images/${props.image}`} alt="shop item" className="shop-item--image" 
            onClick={(e) => handleClick(e)} />
            <p className='shop-item--title'>{props.title}</p>
            <p className='shop-item--price'>{props.price}</p>
        </Card>
     );
}

export default ShopItem;