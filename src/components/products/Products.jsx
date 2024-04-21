import React, { useEffect, useState } from 'react'
import '../products/Products.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addToLikes } from '../../context/counterSlice';


const API_URL = "https://fakestoreapi.com/products"

function Products() {
const [items, setItems] = useState([])
const [count, setCount] = useState(8)
const dispatch = useDispatch()


useEffect(() => {
    axios.get(`${API_URL}?limit=${count}`)
    .then(res => setItems(res.data))
    .catch(err => console.log(err))
},[count])

const handleLiked = (e) => {
    dispatch(addToLikes(e))
}

let products = items?.map(el => (
    <div className='card' key={el.id}>
        <img src={el.image} alt="" />
        <h2>{el.title}</h2>
        <h3>$ {el.price}</h3>
        <FaRegHeart className='card_like' onClick={()=> handleLiked(el)}/>
    </div>
))

  return (
    <>
    <div className='cards_top'>
        <h2 className='cards_text'>Best seller</h2>
        <ul>
            <Link>
            <li>All</li>
            </Link>
            <li>Bags</li>
            <li>Sneakers</li>
            <li>Belt</li>
            <li>Sunglasses</li>
        </ul>
    </div>
    <div className='cards'>
        {products}
    </div>
    </>
  )
}

export default Products