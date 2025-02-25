import classes from './card.module.css'
import React from 'react';

interface Idiom {
    id: number;
    idiom: string;
    en_meaning: string;
    zh_meaning: string;
    ja_meaning: string;
  }


const Card: React.FC<Idiom> = ({ idiom, en_meaning, zh_meaning}) => {
    return (
        <div className={classes.card}>
           <p className={classes.fetchedidiom}>{idiom}</p>
           <p className={classes.chinese}>{zh_meaning}</p>
           <p className={classes.english}>{en_meaning}</p>
        </div>
    )
}

export default Card;