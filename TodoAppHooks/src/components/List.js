import React from 'react'

export const ListComponent = () => {
    return (
        <ul>
            <li>
                <label htmlFor>
                    <input type="checkbox" id=""/>
                    Cooking To Do
                </label>
                <button>Edit</button>
            </li>

            <li>
                <label htmlFor>
                    <input type="checkbox" id=""/>
                    Cooking To Do 2
                </label>
                <button>Edit</button>
            </li>
        </ul>
    )
}
