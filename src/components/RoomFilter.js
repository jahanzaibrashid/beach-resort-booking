import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'
import Title from './Title'

const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))]
}
export default function RoomFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;
    // get unique types 
    let types = getUnique(rooms, 'type');

    //add all in array and spread previous types 
    types = ['all', ...types];
    //map jsx 
    types = types.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })
    console.log(type);
    debugger;
    let people = getUnique(rooms, "capacity")
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })
    console.log(people)


    return <section className="filter-container">
        <Title title="search rooms" />
        <form className="filter-form">
            {/* start of type */}
            <div className="form-group">
                <label htmlFor="type">room type</label>
                <select name="type" id="type" value={type}
                    className="form-control" onChange={handleChange}>
                    {types}
                </select>
            </div>
            {/* end of type */}

            {/* start of guest */}
            <div className="form-group">
                <label htmlFor="capacity">guest</label>
                <select name="capacity" id="capacity" value={capacity}
                    className="form-control" onChange={handleChange}>
                    {people}
                </select>
            </div>
            {/* end of guest */}

            {/* start room price  */}
            <div className="form-group">
                <label htmlFor="price">
                    room price ${price}
                </label>
                <input type="range" name="price" min={minPrice} max={maxPrice}
                    id="price" value={price} onChange={handleChange} className="form-control" />
            </div>
            {/* end room price  */}

            {/* start room size  */}
            <div className="form-group">
                <label htmlFor="size"> size</label>
                <div className="size-inputs">
                    <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                    <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
                </div>
            </div>
            {/* end room size  */}

            {/* start checkbox filter  */}
            <div className="form-group">
                <div className="single-extra">
                    <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                    <label htmlFor="breakfast">Break Fast</label>
                </div>
                <div className="single-extra">
                    <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                    <label htmlFor="pets">pets</label>
                </div>
            </div>
            {/* end checkbox filter  */}


        </form>
    </section>
}
