import React, { useState } from 'react'
import Search from '../components/Search'
import Picture from '../components/Picture'

const Homepage = () => {
  const [input, setInput] = useState('')
  const searchURL =  `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`  
  let [data, setData] = useState(null)
  const auth = '563492ad6f917000010000017d242b38f3d149c4a21bcdba5326d52d'
  const intialURL = 'https://api.pexels.com/v1/curated?page=1&per_page=15'
  const search = async () => {
    const dataFetch = await fetch(intialURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: auth,
      },
    })
    let parsedData = await dataFetch.json()
    setData(parsedData.photos)
  };
  return (
    <div style={{ minHeight: '100vh' }}>
      <Search search={search} />
      <div className='pictures'>
        {data &&
          data.map(d => {
            return <Picture data={d} />
          })
        }
      </div>
    </div>
  )
}

export default Homepage