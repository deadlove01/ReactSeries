import React, {useState} from 'react'
import data from '../../Data/static.json'

const BookableList = () => {

    const [bookableIndex, setBookableIndex] = useState(1);
    const {bookables} = data;

    const group = "Rooms";
    const bookablesInGroup = bookables.filter(b => b.group === group);

    const changeBookable = (selectedIndex) => {
        setBookableIndex(selectedIndex);
        console.log(selectedIndex);
    }

    return (
        <ul className='bookables items-list-nav'>
            {
            bookablesInGroup.map((b, i) => (
                <li key={
                        b.title
                    }
                    className={
                        i === bookableIndex ? "selected" : ""
                }>
                    <button className='btn' onClick={() => changeBookable(i)}>{
                        b.title
                    }</button>
                </li>
            ))
        } </ul>
    );
}

export default BookableList
