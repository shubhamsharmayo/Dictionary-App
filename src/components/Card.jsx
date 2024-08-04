import React from 'react'
import { useState } from 'react'
import './card.css'
import { FcSpeaker } from "react-icons/fc";

function sound(x){
    const voice = new Audio(x)
    voice.play()
  }



const Card = ({userdata}) => {
  return (
    <div className='main-box'>
        <div className="word-box">
      <h1>{userdata.word}</h1>
        <div className="phonetics">
          {userdata.phonetics.map((phonetic,index1)=>(
            <div key={index1} className='audio-btn'>
              {phonetic.text&&phonetic.audio&&<div><p>{phonetic.text}</p><button onClick={()=>{sound(phonetic.audio)}}><FcSpeaker size="33px" /></button></div>}
            </div>
            
          ))}
        </div>
        </div>

          <div className='meaning-box'>
          {userdata.meanings.map((meaning,index)=>(
              <div key={index} className='meaning'>
                <h3>{meaning.partOfSpeech}</h3>
                <ol>
                {meaning.definitions.map((definition,dindex)=>(
                  <li key={dindex} className='def-list'>
                  <p className='definition'>{definition.definition}</p>
                  {definition.example&&<p className='example'><b>Example : </b>{definition.example}</p>}
                  {meaning.synonyms?<p className='synonyms'><b>synonyms : </b>({meaning.synonyms.join(' , ')})</p>:<p> </p>}
                  {meaning.antonyms?<p className='antonyms'><b>antonyms : </b>({meaning.antonyms.join(' , ')})</p>:<p> </p>}
                  </li>
                ))}
                </ol>
              </div>
          ))}
          </div>
    </div>
  )
}

export default Card
