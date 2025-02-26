import React, { useContext } from 'react'
import { ComponentsContext } from '../Pages/HomePage'

function SearchRecently() {
    const {cityName , country} = useContext(ComponentsContext)
  return (
    <div>
        <p>جست و جو های اخیر</p>
        {cityName.map((item , index) => <div key={index}>
            <p>{item}</p>
            <p>{country[index]}</p>
        </div>)}
    </div>
  )
}

export default SearchRecently