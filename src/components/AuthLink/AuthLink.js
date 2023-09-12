import Link from 'next/link';
import React from 'react';
import styles from "./authLink.module.css"

export default function AuthLink() {
  const status = 'notAuthenticated'
  return (
    <>
    {status === 'notAuthenticated'? (
      <Link href="/login">Login</Link>
    ):(
      <>
      <Link href="/write">Write</Link>
      <span className={styles.link}>logout</span>
      </>
    )}
    </>
  )
}
