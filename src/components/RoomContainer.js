import React from 'react'
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from '../context';
import Loading from './Loading';

function RoomContainer({ context }) {
    const { loading, rooms, sortedRooms } = context;
    if (loading) {
        return <Loading/>
    }
    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
       </>
    )
}

export default withRoomConsumer(RoomContainer)



// import React from 'react'
// import RoomFilter from "./RoomFilter";
// import RoomList from "./RoomList";
// import { RoomConsumer } from '../context';
// import Loading from './Loading';

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             { (value) => {
//                 console.log(value)
//                 const {loading, sortedRooms, rooms} = value;
//                 if(loading){
//                     return <Loading/>
//                 }
//                 return( 
//                 <div>
//                     Hello from rooms container
//                     <RoomFilter rooms={rooms} />
//                     <RoomList rooms={sortedRooms} />
//                 </div>
//                 )
//             }}
//         </RoomConsumer>

//     )
// }
