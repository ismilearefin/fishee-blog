import Image from 'next/image'
import Link from 'next/link'
import styles from './categoryList.module.css'
import React from 'react'

const data = [
  {
    _id:"01",
    title:"Style",
    img:"/style.png"
  },
  {
    _id:"02",
    title:"Fashion",
    img:"/fashion.png"
  },
  {
    _id:"03",
    title:"Food",
    img:"/food.png"
  },
  {
    _id:"04",
    title:"Travel",
    img:"/travel.png"
  },
  {
    _id:"05",
    title:"Culture",
    img:"/culture.png"
  },
  {
    _id:"06",
    title:"Coding",
    img:"/coding.png"
  }
]

export default function CategoryList() {

  const generateColors = (index) => {
    const colors = [
      '#57c4ff31',
      '#da85c731',
      '#7fb88133',
      '#ff795736',
      '#ffb04f45',
      '#5e4fff31'
    ];
    return colors[index % colors.length];
  }

  return (
    <div>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item,index) => (
          <Link
            href={`/blog?cat=${item.title}`}
            className={styles.category}
            style={{backgroundColor: generateColors(index)}}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
