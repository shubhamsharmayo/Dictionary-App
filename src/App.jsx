import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Card from './components/Card'
import { FaSearch } from "react-icons/fa";
import Loading from './components/Loading'

function App() {
  const [userdata, setuserdata] = useState("")
  const [loader, setloader] = useState(true)
  const [input, setinput] = useState("")
  const [load, setload] = useState(true)

  function getmeaning() {
    setloader(true)
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
      .then((response) => {
        setuserdata(response.data[0])
        setloader(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setloader(false)
      })
    }

    useEffect(() => {
      setTimeout(() => {
        setload(false)
       }, 1500);
    
      
    }, [])
    
    console.log(userdata)
    
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        getmeaning();
      }
    };
   
  return (
    <>
    {load? <Loading />:
    <div className="container">
      <div className='heading'><h1>Dictionary</h1></div>
      
      <div className="search">
      <input type="text" placeholder='Search' onChange={(e) => { setinput(e.target.value) }} onKeyDown={handleKeyPress} />
      <button className='search-btn' onClick={() => { getmeaning() }} ><FaSearch size="30px" /></button>
      </div> 
      {loader ? (
        <p></p>
      ) : userdata ? (
        <>
          <Card userdata={userdata}/>
        </>
      ) : null}
      </div>}
    </>
  )
}

export default App
