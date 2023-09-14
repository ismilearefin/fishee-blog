"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import styles from "./authLink.module.css"

export default function AuthLink() {

  const [open,setOpen] = useState(true)


  const status = 'notAuthenticated'
  return (
    <>
    {status === 'notAuthenticated'? (
      <Link href="/login" className={styles.link}>Login</Link>
    ):(
      <>
      <Link href="/write">Write</Link>
      <span className={styles.link}>logout</span>
      </>
    )}
    <div className={styles.burger} onClick={()=>setOpen(!open)}>
    <div className={styles.line}></div>
    <div className={styles.line}></div>
    <div className={styles.line}></div>
    </div>
    {
      open && (
        <div className={styles.responsiveMenu}>
          <Link href='/'>Home</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
          {status === 'notAuthenticated'? (
            <Link href="/login" className={styles.link}>Login</Link>
          ):(
            <>
            <Link href="/write">Write</Link>
            <span className={styles.link}>logout</span>
            </>
          )}
        </div>
      )
    }
    </>
  )
}
