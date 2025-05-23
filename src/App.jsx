import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import imgNamaku from './assets/gambar/Desain/Background/NAMAKU.png'
import imgUmurku from './assets/gambar/Desain/Background/UMURKU.png'

import bocil from "./assets/gambar/Desain/Button/bocil.png"

import header from "./assets/gambar/Header/Header 1.png"
import arrow from "./assets/gambar/Desain/Button/Button Next-Back.png"

import audioAku from './assets/audio/Aku.mp3';
import audioKamu from './assets/audio/Kamu.mp3';
import audioIya from './assets/audio/Iya.mp3';
import audioTidak from './assets/audio/Tidak.mp3';

import imgAku from './assets/gambar/Desain/Button/Aku.png';
import imgKamu from './assets/gambar/Desain/Button/Kamu.png';
import imgIya from './assets/gambar/Desain/Button/Ya.png';
import imgTidak from './assets/gambar/Desain/Button/Tidak.png';

import defaultTulisan from './assets/Tulisan.png'
import defaultLogo from './assets/Logo AAC.png'

import Category from './data/category';

import Mulai from './assets/gambar/Desain/Button/Mulai.png'
import MulaiText from './assets/Mulai.png'
import Data from './data/data';

import mulaiSound from './assets/audio/Mulai.mp3'
import selamatDatang from './assets/audio/Selamat datang.mp3'

function App() {
  const [boxs, setBoxs] = useState([]);

  const [username,setUsername]=useState('')

  const [firstHeader,setFirstHeader] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const [scene,setScene] = useState(0)

  const handleCardClick = (box) => {
    const alreadyExists = boxs.some(existingBox => existingBox.nama_box === box.nama_box);
    if (!alreadyExists) {
      setBoxs([...boxs, box]);
      const audio = new Audio(box.sound);
      audio.play()
    }

  };

  const playSoundsSequentially = async () => {
    if (isPlaying) return; // Prevent multiple plays

    setIsPlaying(true);
    for (let i = 0; i < boxs.length; i++) {
      await playSound(boxs[i].sound);
    }

    setIsPlaying(false);
  };



  const playMulai = () => {
    const audio = new Audio(mulaiSound);
    audio.currentTime = 0.5;
    audio.play();
    setScene(2);
    
    // Wait for the first audio to finish before playing the second one
    audio.addEventListener('ended', () => {
        const selamatsDatang = new Audio(selamatDatang);
        selamatsDatang.play();
    });
}
  
  const playSound = (src) => {
    return new Promise((resolve, reject) => {
      const audio = new Audio(src);
  
      audio.onloadedmetadata = () => {
        const duration = audio.duration;
        const cutTime = 0;
  
        // Set the current time to 0.2 seconds to skip the start
        audio.currentTime = cutTime;
  
        audio.play().then(() => {
          setTimeout(() => {
            audio.pause();
            audio.currentTime = 0; // Reset the audio for future playback
            resolve();
          }, (duration - cutTime - cutTime) * 1000); // Play until 0.2 seconds before the end
        }).catch((e) => {
          reject(new Error(`Failed to play audio: ${src}`));
        });
      };
  
      audio.onerror = (e) => {
        reject(new Error(`Failed to load audio: ${src}`));
      };
  
      audio.onended = resolve; // In case the audio naturally ends before the timeout
    });
  };

  const handleRemoveClick = (box) => {
    setBoxs(boxs.filter(existingBox => existingBox.nama_box !== box.nama_box));
  };

  const handleCategoryClick = (category) => {
    if (selectedCategory && selectedCategory.nama_category === category.nama_category) {
      setSelectedCategory(null);
      setFirstHeader(true)
    } else {
      setSelectedCategory(category);
    }
  };

  const filteredData = selectedCategory ? Data[selectedCategory.nama_category] : [];
  


  const defaultHeader = [
    {
      header:null,
    }
  ]
  
  const defaultData = [
    {
      nama_box: "Aku",
      sound: audioAku,
      img: imgAku
    },
    {
      nama_box: "Kamu",
      sound: audioKamu,
      img: imgKamu
    },
    {
      nama_box: "Ya",
      sound: audioIya,
      img: imgIya
    },
    {
      nama_box: "Tidak",
      sound: audioTidak,
      img: imgTidak
    },
  ];

  const filteredHeader = selectedCategory ? [selectedCategory] : defaultHeader;

  const nextCategory = () => {
    if (selectedCategory == null) {
      setSelectedCategory(Category[0]);
      setFirstHeader(false)
    } else {
      const currentIndex = Category.findIndex(category => category.nama_category === selectedCategory.nama_category);
      const nextIndex = (currentIndex + 1) % Category.length;
      setFirstHeader(false)
      setSelectedCategory(Category[nextIndex]);
    }
  };

  const backCategory = () => {

    if (selectedCategory == Category[0]) {
      setFirstHeader(true)
    } 
  
    if (selectedCategory == null) {
      setScene(2);
      setFirstHeader(true)
    } else {
      const currentIndex = Category.findIndex(category => category.nama_category === selectedCategory.nama_category);
      const nextIndex = (currentIndex - 1) % Category.length;
      setSelectedCategory(Category[nextIndex]);
    }
    
  };

  return (
    <>  

    <div className={scene===0?"second-screen":"hide"} >
  
        <img src={Mulai} onClick={playMulai}/>
        <img style={{width:'50%'}} src={MulaiText} onClick={playMulai}/>
    </div>
    <div className={scene ===2?"third-screen":"hide"}>
        <div className='form-container'>
          <div className='input-wrapper'>
          <label><img src={imgNamaku} /></label>
            <div style={{background:'white',padding:'10px',borderRadius:'25px'}}>
            <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} />

            </div>
          </div>
          <div className='input-wrapper'>
            <label><img src={imgUmurku} /></label>
            <div style={{background:'white',padding:'10px',borderRadius:'25px'}}>
            <input type='number' />
            </div>
          </div>
          <img className='bocil' src={bocil} />
        </div>
        <div className='button-container'>
       
              <img src={arrow} onClick={()=>setScene(3)} alt="arrow" />
         

        </div>
    </div>
      <div className={scene == 3?'main-container':'main-container hide'}>
      <div className='top-container'>
      {firstHeader ? (
  <div className='default-header'>
      <div className='image-container'>
        <img src={defaultLogo} />
      </div>
      <div className='text-container'>
        <img src={defaultTulisan} />
        <p>Hai {username} mau ngapain dulu nih?</p>
      </div>
  </div>
) : (
  filteredHeader.map((item, index) => (
    <div 
      key={index} 
      style={{ backgroundImage: `url(${item.header})`, backgroundSize: 'cover' }}
    >
    </div>
  ))
)}
  
</div>
        <div className='bottom-container'>
          <div className='input-container'>
          <div className='input-card'>
              {boxs.map((box, index) => (
                <div style={{backgroundImage: `url(${box.img})`, backgroundSize: 'cover'}} onClick={() => handleRemoveClick(box)} key={index}>
                  {/* Add any content inside the div if needed */}
                </div>
              ))}
          
            
          </div>
          <div onClick={isPlaying ? null : playSoundsSequentially} className='play'>
              <img src={arrow} alt="arrow" />
          </div>

          </div>
          
          <div className='card-container'>
            {(selectedCategory ? filteredData : defaultData).map((box, index) => (
              <div style={{backgroundImage: `url(${box.img})`, backgroundSize: 'cover'}} key={index} onClick={() => handleCardClick(box)}>
                {/* Add any content inside the div if needed */}
              </div>
            ))}
          </div>
          <div className='navigation-container'>
          <div className='back' onClick={()=>backCategory()} alt="arrow">
              <img src={arrow} alt="arrow" />
          </div>

          <div className='category-container'>
            {Category.map((category, index) => (
              <div
                style={{backgroundImage: `url(${category.img})`, backgroundSize: 'cover',backgroundPosition:'center'}} 
                className={selectedCategory && selectedCategory.nama_category === category.nama_category ? 'selected' : 'category-card'}
                key={index}
                onClick={() => handleCategoryClick(category)}
              >
                {/* Add any content inside the div if needed */}
              </div>
            ))}
          </div>

          <div className='next' onClick={()=>nextCategory()} alt="arrow"> 
          <img src={arrow} alt="arrow" />
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
