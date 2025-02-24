import React from 'react'
import classes from './form.module.css'

export default function Form() {
    return (
    <form className={classes.form}>
    <input name="query" />
    <button type="submit">Search</button>
</form>
)}