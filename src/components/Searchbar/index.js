import React, {useRef, useState} from 'react'
import SearchContent from '../SearchContent';
import styles from "./index.module.css"

const Searchbar = () => {
const [userList, setUserList] = useState([]);
const debounceTimer = useRef()

const handleSearch = async (e) =>{
  clearTimeout(debounceTimer.current);
  debounceTimer.current = setTimeout(async () => {
    if(!e.target.value){
      setUserList([]);
      return
    }
    const result = await (await (fetch(`https://api.github.com/search/users?q=${e.target.value}`))).json()
    setUserList(result?.items?result.items.map(item => {
      return({
        username: item.login,
        avatar: item.avatar_url,
        profile: item.html_url
      })
    }):[])
  }, 500);
}
  return (
    <div className={styles.wrapper}>
      <input onChange={handleSearch} type="text" placeholder="Enter Git User"/>
      <SearchContent items={userList}/>
    </div>
  )
}

export default Searchbar