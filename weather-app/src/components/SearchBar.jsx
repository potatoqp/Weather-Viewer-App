import { useState } from "react";

function SearchBar({ city, setCity }) {


    return (
        <div>

            <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
            />

            <button>Search</button>

        </div>
    )

}

export default SearchBar