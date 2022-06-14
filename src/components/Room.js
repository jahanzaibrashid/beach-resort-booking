import React from 'react'
import { Link } from 'react-router-dom';
import PropType from "prop-types";

export default function Room({ room }) {
    const { name, slug, images, price } = room;
    return (
        <article className='room'>
            <div className="img-container">
                <img src={images[0]} alt="single room" />
                <div className="price-top">
                    <h6>{price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">Features</Link>
                <p className="room-info">{name}</p>
            </div>
        </article>
    )
}

Room.prototype = {
    room: PropType.shape({
        name:PropType.string.isRequired,
        slug:PropType.string.isRequired,
        images:PropType.arrayOf(PropType.string).isRequired,
        price: PropType.string.isRequired
    })
}
