import React, { useState } from "react"

import ItemList from "../components/ItemList"

import {HomeStyle} from "../styles/home"
import { data } from '../pages/api/list'



export default function Home() {
  const [name, setName] = useState("")
  const [ users, setUsers ] = useState(data)

  function filter(e){
    const searchName = e.target.value

    if( searchName != " "){
      const results = data.filter((item) => {
        return item.title.toLowerCase().startsWith(searchName.toLowerCase());
      });

      setUsers(results)
    } else{
      setUsers(data)
    }

    setName(searchName)
  }

  return (
    <HomeStyle>
        <div className="header">
          <img src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png" width="32" height="32" alt=""/>
          <h1>Emoji Search</h1>
          <img src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png" width="32" height="32" alt=""/>
        </div>

        

        <div className="main">

          <div className="input">
            <input
              type="search"
              id= "search-bar"
              name= "search-bar"
              value={name}
              onChange={filter}
            />
          </div>
          
          {
            users && users != 0? 
              users.map((item) => {
                return(
                

                    
                  <ItemList emoji= { item.symbol } title= { item.title }/>
                 
            
        
                )
              })
              :
              <></>
          }
        </div>
    </HomeStyle>
  )
}
