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
      
<footer className='social-links'><a href="https://www.instagram.com/shubham_sharma_yo?igsh=ZjFwMjk1aTJyeWpi"><img src="src\assets\icons8-instagram.svg" alt="" /></a>
      <a href="https://www.linkedin.com/in/shubham-sharma-7a1873263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="src\assets\icons8-linkedin.svg" alt="" /></a>
      <a href="https://github.com/shubhamsharmayo"><img src="src\assets\icons8-github.svg" alt="" /></a>
      </footer>

      <footer className='name-display'><p>Designed and Developed by Shubham</p></footer>
      </div>}
      
    </>
  )
}

export default App
