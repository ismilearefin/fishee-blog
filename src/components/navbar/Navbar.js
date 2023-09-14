import React from 'react';
import styles from "./navbar.module.css";
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLink from '../AuthLink/AuthLink';

export default function Navbar() {
  return (
    <div className={styles.container}>
        <div className={styles.social}>
            <Image src="/facebook.png" alt='Facebook' width={24} height={24}/>
            <Image src="/instagram.png" alt='instagram' width={24} height={24}/>
            <Image src="/tiktok.png" alt='tiktok' width={24} height={24}/>
            <Image src="/youtube.png" alt='youtube' width={24} height={24}/>
        </div>
        <div className={styles.logo}>Fishee.</div>
        <div className={styles.links}>
            <ThemeToggle></ThemeToggle>
            <Link href="" className={styles.link}>Homepage</Link>
            <Link href="" className={styles.link}>Contact</Link>
            <Link href="" className={styles.link}>About</Link>
            <AuthLink></AuthLink>
        </div>
    </div>
  )
}
