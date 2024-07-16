
//Kegiatan
import audioMakan from "../assets/audio/Makan.mp3"
import audioMinum from "../assets/audio/Minum.mp3"
import audioTidur from "../assets/audio/Tidur.mp3"
import audioPergi from "../assets/audio/Pergi.mp3"
import audioMandi from "../assets/audio/Mandi.mp3"

import imgMakan from "../assets/gambar/Desain/Button/Makan.png"
import imgMinum from "../assets/gambar/Desain/Button/Minum.png"
import imgTidur from "../assets/gambar/Desain/Button/Tidur.png" 
import imgPergi from "../assets/gambar/Desain/Button/Pergi.png"
import imgMandi from "../assets/gambar/Desain/Button/Mandi.png"

//end kegiatan



//makanan
import audioNasi from "../assets/audio/Nasi.mp3"
import audioAirPutih from "../assets/audio/Air putih.mp3"
import audioSayur from "../assets/audio/Sayur.mp3"
import audioSusu from "../assets/audio/Susu.mp3"
import audioBuah from "../assets/audio/Buah.mp3"
import AudioRoti from "../assets/audio/Roti.mp3"

import imgNasi from "../assets/gambar/Desain/Button/Nasi.png"
import imgAirPutih from "../assets/gambar/Desain/Button/Air Putih.png"
import imgSayur from "../assets/gambar/Desain/Button/Sayur.png"
import imgSusu from "../assets/gambar/Desain/Button/Susu.png"
import imgRoti from "../assets/gambar/Desain/Button/Roti.png"
import imgBuah from "../assets/gambar/Desain/Button/Buah.png"
//end makanan

//waktu
import audioPagi from "../assets/audio/Pagi.mp3"
import audioSiang from "../assets/audio/Siang.mp3"
import audioMalam from "../assets/audio/Malam.mp3"
import audioSekarang from "../assets/audio/Sekarang.mp3"
import audioKemarin from "../assets/audio/Kemarin.mp3"
import audioBesok from "../assets/audio/Besok.mp3"

import imgPagi from "../assets/gambar/Desain/Button/Pagi.png"
import imgSiang from "../assets/gambar/Desain/Button/Siang.png"
import imgMalam from "../assets/gambar/Desain/Button/Malam.png"
import imgSekarang from "../assets/gambar/Desain/Button/Sekarang.png"
import imgKemarin from "../assets/gambar/Desain/Button/Kemarin.png"
    import imgBesok from "../assets/gambar/Desain/Button/Besok.png"
//end waktu

//tempat
import audioRumah from "../assets/audio/Rumah.mp3"
import audioSekolah from "../assets/audio/Sekolah.mp3"
import audioToilet from "../assets/audio/Toilet.mp3"
import audioRumahSakit from "../assets/audio/Rumah Sakit.mp3"
import audioSupermarket from "../assets/audio/Supermarket.mp3"

import imgRumah from "../assets/gambar/Desain/Button/Rumah.png"
import imgSekolah from "../assets/gambar/Desain/Button/Sekolah.png"
import imgToilet from "../assets/gambar/Desain/Button/Toilet.png"
import imgRumahSakit from "../assets/gambar/Desain/Button/Rumah Sakit.png"
import imgSupermarket from "../assets/gambar/Desain/Button/Supermarket.png"
//end tempat

//tanya
import audioKapan from "../assets/audio/Kapan.mp3"
import audioDimana from "../assets/audio/Dimana.mp3"
import audioSiapa from "../assets/audio/Siapa.mp3"
import audioApa from "../assets/audio/Apa.mp3"
import audioBerapa from "../assets/audio/Berapa.mp3"

import imgKapan from "../assets/gambar/Desain/Button/Kapan.png"
import imgDimana from "../assets/gambar/Desain/Button/Dimana.png"
import imgSiapa from "../assets/gambar/Desain/Button/Siapa.png"
import imgApa from "../assets/gambar/Desain/Button/Apa.png"
import imgBerapa from "../assets/gambar/Desain/Button/Berapa.png"
//end tanya

//arah
import audioAtas from "../assets/audio/Atas.mp3"
import audioBawah from "../assets/audio/Bawah.mp3"
import audioKanan from "../assets/audio/Kanan.mp3"
import audioKiri from "../assets/audio/Kiri.mp3"
import audioDepan from "../assets/audio/Depan.mp3"
import audioBelakang from "../assets/audio/Belakang.mp3"

import imgAtas from "../assets/gambar/Desain/Button/Atas.png"
import imgBawah from "../assets/gambar/Desain/Button/Bawah.png"
import imgKanan from "../assets/gambar/Desain/Button/Kanan.png"
import imgKiri from "../assets/gambar/Desain/Button/Kiri.png"
import imgDepan from "../assets/gambar/Desain/Button/Depan.png"
 import imgBelakang from "../assets/gambar/Desain/Button/Belakang.png"

//end arah

//kata sakti
import audioMaaf from "../assets/audio/Maaf.mp3"
import audioTolong from "../assets/audio/Tolong.mp3"
import audioTerimakasih from "../assets/audio/Terima Kasih.mp3"

import imgMaaf from "../assets/gambar/Desain/Button/Maaf.png"
import imgTolong from "../assets/gambar/Desain/Button/Tolong.png"
import imgTerimakasih from "../assets/gambar/Desain/Button/Terima Kasih.png"
//end kata sakti

//emosi
import audioSenang from "../assets/audio/Senang.mp3"
import audionSedih from "../assets/audio/Sedih.mp3"
import audioMarah from "../assets/audio/Marah.mp3"
import audioTakut from "../assets/audio/Takut.mp3"

import imgSenang from "../assets/gambar/Desain/Button/Senang.png"
import imgSedih from "../assets/gambar/Desain/Button/Sedih.png"
import imgMarah from "../assets/gambar/Desain/Button/Marah.png"
import imgTakut from "../assets/gambar/Desain/Button/Takut.png"
//end emosi





const Data = {
    Kegiatan: [
        {
          nama_box: "Makan",
          sound: audioMakan,
          img: imgMakan
        },
        {
          nama_box: "Minum",
          sound: audioMinum,
          img: imgMinum
        },
        {
          nama_box: "Tidur",
          sound: audioTidur,
          img: imgTidur
        },
        {
            nama_box: "Pergi",
            sound: audioPergi,
            img: imgPergi
          },
          {
            nama_box: "Mandi",
            sound: audioMandi,
            img: imgMandi
          }
      ],
    Makanan: [
      {
        nama_box: "nasi",
        sound: audioNasi,
        img: imgNasi
      },
      {
        nama_box: "air putih",
        sound: audioAirPutih,
        img: imgAirPutih
      },
      {
        nama_box: "sayur",
        sound: audioSayur,
        img: imgSayur
      },
      {
        nama_box: "Susu",
        sound: audioSusu,
        img: imgSusu
      },
      {
        nama_box: "Roti",
        sound: AudioRoti,
        img: imgRoti
      },
      {
        nama_box: "Buah",
        sound: audioBuah,
        img: imgBuah
      }
    ],
    Waktu: [
      {
        nama_box: "Pagi",
        sound: audioPagi,
        img: imgPagi
      },
      {
        nama_box: "Siang",
        sound: audioSiang,
        img: imgSiang
      },
      {
        nama_box: "Malam",
        sound: audioMalam,
        img: imgMalam
      },
      {
        nama_box: "Sekarang",
        sound: audioSekarang,
        img: imgSekarang
      },
      {
        nama_box: "kemarin",
        sound: audioKemarin,
        img: imgKemarin
      },
      {
        nama_box: "Besok",
        sound: audioBesok,
        img: imgBesok
      }
      // Add more items as needed
    ],
    Tempat: [
        {
          nama_box: "Rumah",
          sound: audioRumah,
          img: imgRumah
        },
        {
          nama_box: "Sekolah",
          sound: audioSekolah,
          img: imgSekolah
        },
        {
          nama_box: "Toilet",
          sound: audioToilet,
          img: imgToilet
        },
        {
          nama_box: "Rumah Sakit",
          sound: audioRumahSakit,
          img: imgRumahSakit
        },
        {
          nama_box: "Supermarket",
          sound: audioSupermarket,
          img: imgSupermarket
        },
        // Add more items as needed
      ],
      Tanya: [
        {
          nama_box: "Kapan",
          sound: audioKapan,
          img: imgKapan
        },
        {
          nama_box: "Dimana",
          sound: audioDimana,
          img: imgDimana
        },
        {
          nama_box: "Siapa",
          sound: audioSiapa,
          img: imgSiapa
        },
        {
          nama_box: "Apa",
          sound: audioApa,
          img: imgApa
        },
        {
          nama_box: "Berapa",
          sound: audioBerapa,
          img: imgBerapa
        },
        // Add more items as needed
      ],
      Arah: [
        {
          nama_box: "Atas",
          sound: audioAtas,
          img: imgAtas
        },
        {
          nama_box: "Bawah",
          sound: audioBawah,
          img: imgBawah
        },
        {
          nama_box: "Kanan",
          sound: audioKanan,
          img: imgKanan
        },
        {
          nama_box: "Kiri",
          sound: audioKiri,
          img: imgKiri
        },
        {
          nama_box: "Depan",
          sound: audioDepan,
          img: imgDepan
        },
        {
          nama_box: "Belakang",
          sound: audioBelakang,
          img: imgBelakang
        }
        // Add more items as needed
      ],
      Kata_sakti: [
        {
          nama_box: "Maaf",
          sound: audioMaaf,
          img: imgMaaf
        },
        {
          nama_box: "Tolong",
          sound: audioTolong,
          img: imgTolong
        },
        {
          nama_box: "Terimakasih",
          sound: audioTerimakasih,
          img: imgTerimakasih
        },
      ],
      Emosi: [
        {
          nama_box: "Senang",
          sound: audioSenang,
          img: imgSenang
        },
        {
          nama_box: "Sedih",
          sound: audionSedih,
          img: imgSedih
        },
        {
          nama_box: "Marah",
          sound: audioMarah,
          img: imgMarah
        },
        {
          nama_box: "Takut",
          sound: audioTakut,
          img: imgTakut
        },
       
      ],
  };

export default Data;
