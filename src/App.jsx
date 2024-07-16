import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import imgNamaku from './assets/gambar/Desain/Background/NAMAKU.png'
import imgUmurku from './assets/gambar/Desain/Background/UMURKU.png'

import bocil from "./assets/gambar/Desain/Button/bocil.png"

import header from "./assets/gambar/Header/Header 1.png"
import arrow from "./assets/gambar/Desain/Button/Button Next-Back.png"

import audioAku from './assets/audio/Aku.m4a';
import audioKamu from './assets/audio/Kamu.m4a';
import audioIya from './assets/audio/Iya.m4a';
import audioTidak from './assets/audio/Tidak.m4a';

import imgAku from './assets/gambar/Desain/Button/Aku.png';
import imgKamu from './assets/gambar/Desain/Button/Kamu.png';
import imgIya from './assets/gambar/Desain/Button/Ya.png';
import imgTidak from './assets/gambar/Desain/Button/Tidak.png';

import Category from './data/category';
import Data from './data/data';

function App() {
  const [boxs, setBoxs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [scene,setScene] = useState(0)

  const handleCardClick = (box) => {
    const alreadyExists = boxs.some(existingBox => existingBox.nama_box === box.nama_box);
    if (!alreadyExists) {
      setBoxs([...boxs, box]);
    }
  };

  const playSoundsSequentially = async () => {
    for (let i = 0; i < boxs.length; i++) {
      await playSound(boxs[i].sound);
    }
  };
  
  const playSound = (src) => {
    return new Promise((resolve, reject) => {
      const audio = new Audio(src);
  
      audio.onloadedmetadata = () => {
        const duration = audio.duration;
        const cutTime = 0.3;
  
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
    } else {
      setSelectedCategory(category);
    }
  };

  const filteredData = selectedCategory ? Data[selectedCategory.nama_category] : [];
  


  const defaultHeader = [
    {
      header:header,
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
    } else {
      const currentIndex = Category.findIndex(category => category.nama_category === selectedCategory.nama_category);
      const nextIndex = (currentIndex + 1) % Category.length;
      setSelectedCategory(Category[nextIndex]);
    }
  };

  const backCategory = () => {
  
    if (selectedCategory == null) {
      setScene(2);
    } else {
      const currentIndex = Category.findIndex(category => category.nama_category === selectedCategory.nama_category);
      const nextIndex = (currentIndex - 1) % Category.length;
      setSelectedCategory(Category[nextIndex]);
    }
    
  };

  return (
    <>  

    <div className={scene===0?"second-screen":"hide"} onClick={()=> setScene(2)}>

    </div>
    <div className={scene ===2?"third-screen":"hide"}>
        <div className='form-container'>
          <div className='input-wrapper'>
          <label><img src={imgNamaku} /></label>
            <div style={{background:'white',padding:'10px',borderRadius:'25px'}}>
            <input type='text' />

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
        {filteredHeader.map((item, index) => (
            <img src={item.header} key={index} alt="header" />
          ))}
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
          <div onClick={playSoundsSequentially} className='play'>
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
