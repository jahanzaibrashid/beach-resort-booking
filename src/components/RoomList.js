import React from 'react'
import Room from './Room';

export default function RoomList({ rooms }) {
    if (rooms.length === 0) {
        return (<div className="empty-search">
            <h3>Unfortunately no room match with your search</h3>
        </div>
        )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {rooms.map((item, index)=>{
                    return <Room key={index} room={item}/>  
                })}
            </div>

        </section>
    )
}
