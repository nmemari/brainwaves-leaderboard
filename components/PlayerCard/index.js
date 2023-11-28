import React from 'react'
import Image from 'next/image'

import styles from './PlayerCard.module.css'

export default function PlayerCard({
    color = "",
    image = "",
    name = "",
    level = 0,
    progBG ="",
    logicProg = 0,
    patternProg = 0,
    numberProg = 0,
    rank = 0
}) {
    return (
        <div className={styles.container} style={{
            backgroundColor: color
        }}>
            <Image src={image} width={95} height={95} className={styles.pfp} />
            <div className={styles.name__container}>
                <h3 className={styles.name}>{name}</h3>
                <h3 className={styles.level}>Level: {level}</h3>
            </div>
            <div className={styles.section__container}>
                <div className={styles.section}>
                    <h3>Logic Problems</h3>
                    <div className={styles.progress__container}>
                        <div className={styles.bar__container} style={{
                            backgroundColor: progBG
                        }}>
                            <div className={styles.bar} style={{
                                width: `${logicProg}%`,
                            }}></div>
                        </div>
                        <h5 className={styles.prog__percent}>{logicProg}%</h5>
                    </div>
                </div>
                <div className={styles.section}>
                    <h3>Pattern Recognition</h3>
                    <div className={styles.progress__container}>
                        <div className={styles.bar__container} style={{
                            backgroundColor: progBG
                        }}>
                            <div className={styles.bar} style={{
                                width: `${patternProg}%`,
                            }}></div>
                        </div>
                        <h5 className={styles.prog__percent}>{patternProg}%</h5>
                    </div>
                </div>
                <div className={styles.section}>
                    <h3>Numbers Problems</h3>
                    <div className={styles.progress__container}>
                        <div className={styles.bar__container} style={{
                            backgroundColor: progBG
                        }}>
                            <div className={styles.bar} style={{
                                width: `${numberProg}%`,
                            }}></div>
                        </div>
                        <h5 className={styles.prog__percent}>{numberProg}%</h5>
                    </div>
                </div>
            </div>
            <div className={styles.rank__container}>
                <h3>Rank</h3>
                <h3>#{rank}</h3>
            </div>
        </div>
    )
}
