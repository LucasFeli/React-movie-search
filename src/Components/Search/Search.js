import React from 'react'

export default function Search() {
    return (
        <div>
            <form className="form">
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query" placeholder ="locking for.."></input>
                <button className="button" type="submit">Search</button>
            </form>
        </div>
    )
}
