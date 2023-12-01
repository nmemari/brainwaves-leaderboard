import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './NavBar.module.css'

import Logo from '../../public/favicon.svg'
import Type from '../../public/type-blue.svg'

export default function NavBar() {
  return (
    <div className={styles.container}>
        <div className={styles.title__container}>
            <Image src={Logo}width={50} height={50}/>
            <Image src={Type} width={215} height={30}/>
        </div>
        <div className={styles.links__container}>
            <Link className={styles.btn} href='https://www.brainwavesapp.ca'>Official Site</Link>
            <Link className={styles.btn} href='https://brainwavesapp.wordpress.com'>Blog</Link>
        </div>
    </div>
  )
}
