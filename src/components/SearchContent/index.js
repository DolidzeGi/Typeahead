import React from 'react'
import styles from "./index.module.css"

const SearchContent = ({items}) => {
  return (
    <div className={styles.wrapper}>
        {!!items && items.map(item => {
            return(
                <div className={styles.item} key={item.profile}>
            <img src={item.avatar} alt='Image'/>
            <div>
                {item.username}
            </div>
            <a href={item.profile}>
            <button>
                Go To Profile
            </button>
            </a>
        </div>
            )
        })}
        
    </div>
  )
}

export default SearchContent