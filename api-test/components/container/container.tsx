'use client'

import IdiomCard from '../card/card'
import classes from './container.module.css'
// import { useEffect, useState } from 'react'

interface Idiom {
    id: number
    idiom: string
    en_meaning: string
    zh_meaning: string
    ja_meaning: string
}

interface CardContainerProps {
    data: Idiom[]; // Accepts idioms as props instead of fetching inside
  }

export default function Container ({ data }: CardContainerProps) {


    return (
        <div className={classes.pageWrapper}>
            <div className={classes.title}>
            <h2>Search results</h2>
            </div>
            <div className={classes.cardContainer}>
                {data.map((idiom) => (
                    <IdiomCard 
                    key={idiom.id}
                    id={idiom.id}
                    idiom={idiom.idiom}
                    en_meaning={idiom.en_meaning}
                    zh_meaning={idiom.zh_meaning}
                    ja_meaning={idiom.ja_meaning}
                    />
                ))}
            </div>
        </div>
    )
}