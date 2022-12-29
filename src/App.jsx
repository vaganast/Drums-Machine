import { useEffect, useState } from 'react'

function App() {

const [pressedKey, setPressedKey] = useState('')


  useEffect(() => { 
    document.addEventListener('keydown', (event) => {
      playMusic(event.key.toUpperCase())      
    })   
  }, [])

  const pads = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ]

const playMusic = (music) => {  
    const audio = document.getElementById(music).play()  
    setPressedKey(music)      
    setTimeout(() => {
      setPressedKey('')
    },3000)  
} 
  return (
    <div className="drum-machine" id="drum-machine">
      <div id="display"><p>Lets play drums you pressed {pressedKey}</p></div>
        <div className='drum-pads'>
          {pads.map((pad) => 
          <div className={`drum-pad${pressedKey === pad.text ? ' pressed': ''}`} 
                tabIndex={0}       
                key={pad.keyCode} 
                id={pad.src} 
                onClick={()=>{playMusic(pad.text)}}
                >
            {pad.text}
            <audio  
            className='clip' 
            id={pad.text} 
            src={pad.src} 
            key={pad.keyCode}             
            />
        </div>)}
      </div>      
    </div>
  )
}

export default App
