"use client"
import { themeContext } from '@/context/ThemeContext'
import React, { useContext, useEffect, useState } from 'react'

export default function ThemeProvider({children}) {
    const {theme} = useContext(themeContext);
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true)
    },[])

    if(mounted){

  return (
    <div className={theme}>{children}</div>
  )
    } 
}
