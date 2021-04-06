import React from 'react'

export default function Search({ handleInput, search }) {
    return (
        <section className="searchbox-wrap">
            <input type="text"
                className="searchbox"
                placeholder="Search for the movie..."
                onChange={handleInput}
                onKeyPress={search}
            />
        </section>
    )
}
