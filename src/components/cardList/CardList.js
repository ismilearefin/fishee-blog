import React from 'react'
import Pagination from '../pagination/Pagination'
import styles from "./cardList.module.css"
export default function CardList() {
  return (
    <div className={styles.container}>
        <p>CardList</p> 
        <Pagination></Pagination>
    </div>
  )
}
