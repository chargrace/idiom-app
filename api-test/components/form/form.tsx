import React, {useState} from 'react'
import classes from './form.module.css'

export default function Form({onSearch}: {onSearch : (query: string) => void}) {
    const [query, setQuery] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
          onSearch(query); // Pass the query to the parent component
        }
      };


    return (
    <form className={classes.form} onSubmit={handleSubmit}>
    <input className={classes.searchInput}name="query" 
    value={query}
    onChange={(e) => setQuery (e.target.value)} 
    placeholder='Search here'/>
    <button className={classes.searchButton}type="submit">Search</button>
</form>

)}