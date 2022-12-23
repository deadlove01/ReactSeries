import React, {useState} from 'react'
import {FaArrowRight} from 'react-icons/fa'
import data from '../../Data/static.json'

const BookableList = () => {

    const [bookableIndex, setBookableIndex] = useState(1);
    const {bookables} = data;

    const [group, setGroup] = useState("Kit");
    const groups = [...new Set(bookables.map(b => b.group))];

    const bookablesInGroup = bookables.filter(b => b.group === group);

    const changeBookable = (selectedIndex) => {
        setBookableIndex(selectedIndex);
        console.log(selectedIndex);
    }


    const nextBookable = () =>{
        setBookableIndex(i => (i+1) % bookablesInGroup.length);
    };

    return (
        <>
            <select value={group} onChange={(e) => setGroup(e.target.value)}>
                {groups.map(g => <option value={g} key={g} > {g} </option>)}
            </select>

            <ul className='bookables items-list-nav'>
                {
                bookablesInGroup.map((b, i) => (
                    <li key={
                            b.title
                        }
                        className={
                            i === bookableIndex ? "selected" : ""
                    }>
                        <button className='btn'
                            onClick={
                                () => changeBookable(i)
                        }>
                            {
                            b.title
                        }</button>
                    </li>
                ))
            } </ul>
            <p>
                <button className='btn' autoFocus 
                    onClick={nextBookable}>
                    <FaArrowRight/>
                    <span>Next</span>
                </button>
            </p>
        </>
    );
}

export default BookableList
