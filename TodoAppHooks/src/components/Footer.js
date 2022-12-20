import React from 'react'

export const FooterComponent = () => {
    return (
        <div className="row">
            <label htmlFor="all">
                <input type="checkbox" name="all" id="all"/>
                All
            </label>
            <p>You have 0 todo(s)</p>
            <button id="delete">Delete</button>
        </div>
    )
}
