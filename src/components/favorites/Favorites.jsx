import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa";
import { removeFromLiked } from '../../context/counterSlice';
import '../favorites/Favorites.css'
import colors from '../../assets/colors.svg'

function Favorites() {
    const i = useSelector(reducer => reducer.counter.value)
    const dispatch = useDispatch()

    

let favorites = i?.map(el => (
    <div className='fav' key={el.id}>
        <img src={el.image} alt="" />
        <h2>{el.title}</h2>
        <h3>$ {el.price}</h3>
        <FaHeart className='fav_like' onClick={()=>dispatch(removeFromLiked(el))}/>
        <p>{el.description}</p>
    </div>
))
  return (
    <>
    <div className='favs'>
    <div className='btns'>
        <ul>
            <li className='btns_title'>Hot Deals</li>
            <li>Nike</li>
            <li>Airmax</li>
            <li>Nike</li>
            <li>Adidas</li>
            <li>Vans</li>
            <li>All stars</li>
            <li>Adidas</li>
        </ul>

        <form action="" className='pricer'>
            <p>Prices</p>
            <input type="range" name="" id="" />
        </form>

        <div className='col'>
            <h2>color</h2>
            <img src={colors} alt="" />
        </div>

        <ul className='brand'>
            <li className='btns_title'>Brand</li>
            <li>Nike</li>
            <li>Nike</li>
            <li>Adidas</li>
            <li>Siemens</li>
        </ul>
    </div>
    <div className='likeds'>
        {favorites}
    </div>
    </div>
    </>
  )
}

export default Favorites