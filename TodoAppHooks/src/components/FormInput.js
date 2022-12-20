import React from 'react'

export const FormInputComponent = () => {
    return (
        <form>
            <input type="text" name="todos" id="todos" required placeHolder="What needs to be done?"/>
            <button type="submit">Create</button>
        </form>
    )
}
