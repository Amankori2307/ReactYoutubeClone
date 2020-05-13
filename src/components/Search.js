import React, { useState } from 'react';
import '../styles/App.css'

function Search({onSubmit}) {
    
    const [searchTerm,setSearchTerm] = useState('')
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchTerm != ""){
            onSubmit(searchTerm);
            setSearchTerm("");
        }
    }
    return (
        <form onSubmit={handleSubmit} className="search">
            <input  type="search"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Search..."
                />
            <button type="submit">Search</button>
        </form>        
    );
}

export default Search;