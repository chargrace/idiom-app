import classes from './card.module.css'
import React from 'react';
import {
    Card,
    CardContent,
    // CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../ui/card"

interface Idiom {
    id: number;
    idiom: string;
    en_meaning: string;
    zh_meaning: string;
    ja_meaning: string;
  }


const IdiomCard: React.FC<Idiom> = ({ idiom, en_meaning, zh_meaning}) => {
    return (
        // <div className={classes.card}>
        //    <p className={classes.fetchedIdiom}>{idiom}</p>
        //    <p className={classes.chinese}>{zh_meaning}</p>
        //    <p className={classes.english}>{en_meaning}</p>
        // </div>
        <Card>
  <CardHeader className={classes.card}>
    <CardTitle className={classes.fetchedIdiom}>{idiom}</CardTitle>
    {/* <CardDescription>Card Description</CardDescription> */}
  </CardHeader>
  <CardContent>
    <p className={classes.chinese}>{zh_meaning}</p>
  </CardContent>
  <CardFooter>
    <p className={classes.english}>{en_meaning}</p>
  </CardFooter>
</Card>
    )
}

export default IdiomCard;