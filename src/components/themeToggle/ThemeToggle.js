"use client"
import React, { useContext } from 'react'
import styles from './themeToggle.module.css'
import Image from 'next/image'
import { themeContext } from '@/context/ThemeContext'

export default function ThemeToggle() {
  const {theme,toggle} = useContext(themeContext);
  
  return (
    <div className={styles.container} onClick={toggle} style={theme === "dark"? { backgroundColor:"white"}:{ backgroundColor:"#0f172a"}}>
      <Image src='/moon.png' alt='moon' width={14} height={14}></Image>
      <div className={styles.ball} style={theme === "dark"? { left:1,backgroundColor:"#0f172a"}:{right:1, backgroundColor:"white"}}></div>
      <Image src='/sun.png' alt='sun' width={14} height={14}></Image>
    </div>
  )
}
