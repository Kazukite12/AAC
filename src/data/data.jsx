
//Kegiatan
import audioMakan from "../assets/audio/Makan.m4a"
import audioMinum from "../assets/audio/Minum.m4a"
import audioTidur from "../assets/audio/Tidur.m4a"
import audioPergi from "../assets/audio/Pergi.m4a"
import audioMandi from "../assets/audio/Mandi.m4a"

import imgMakan from "../assets/gambar/Desain/Button/Makan.png"
import imgMinum from "../assets/gambar/Desain/Button/Minum.png"
import imgTidur from "../assets/gambar/Desain/Button/Tidur.png" 
import imgPergi from "../assets/gambar/Desain/Button/Pergi.png"
import imgMandi from "../assets/gambar/Desain/Button/Mandi.png"

//end kegiatan



//makanan
import audioNasi from "../assets/audio/Nasi.m4a"
import audioAirPutih from "../assets/audio/Air putih.m4a"
import audioSayur from "../assets/audio/Sayur.m4a"
import audioSusu from "../assets/audio/Susu.m4a"
import audioBuah from "../assets/audio/Buah.m4a"
import AudioRoti from "../assets/audio/Roti.m4a"

import imgNasi from "../assets/gambar/Desain/Button/Nasi.png"
import imgAirPutih from "../assets/gambar/Desain/Button/Air Putih.png"
import imgSayur from "../assets/gambar/Desain/Button/Sayur.png"
import imgSusu from "../assets/gambar/Desain/Button/Susu.png"
import imgRoti from "../assets/gambar/Desain/Button/Roti.png"
import imgBuah from "../assets/gambar/Desain/Button/Buah.png"
//end makanan

//waktu
import audioPagi from "../assets/audio/Pagi.m4a"
import audioSiang from "../assets/audio/Siang.m4a"
import audioMalam from "../assets/audio/Malam.m4a"
import audioSekarang from "../assets/audio/Sekarang.m4a"
import audioKemarin from "../assets/audio/Kemarin.m4a"
import audioBesok from "../assets/audio/Besok.m4a"

import imgPagi from "../assets/gambar/Desain/Button/Pagi.png"
import imgSiang from "../assets/gambar/Desain/Button/Siang.png"
import imgMalam from "../assets/gambar/Desain/Button/Malam.png"
import imgSekarang from "../assets/gambar/Desain/Button/Sekarang.png"
import imgKemarin from "../assets/gambar/Desain/Button/Kemarin.png"
    import imgBesok from "../assets/gambar/Desain/Button/Besok.png"
//end waktu

//tempat
import audioRumah from "../assets/audio/Rumah.m4a"
import audioSekolah from "../assets/audio/Sekolah.m4a"
import audioToilet from "../assets/audio/Toilet.m4a"
import audioRumahSakit from "../assets/audio/Rumah Sakit.m4a"
import audioSupermarket from "../assets/audio/Supermarket.m4a"

import imgRumah from "../assets/gambar/Desain/Button/Rumah.png"
import imgSekolah from "../assets/gambar/Desain/Button/Sekolah.png"
import imgToilet from "../assets/gambar/Desain/Button/Toilet.png"
import imgRumahSakit from "../assets/gambar/Desain/Button/Rumah Sakit.png"
import imgSupermarket from "../assets/gambar/Desain/Button/Supermarket.png"
//end tempat

//tanya
import audioKapan from "../assets/audio/Kapan.m4a"
import audioDimana from "../assets/audio/Dimana.m4a"
import audioSiapa from "../assets/audio/Siapa.m4a"
import audioApa from "../assets/audio/Apa.m4a"
import audioBerapa from "../assets/audio/Berapa.m4a"

import imgKapan from "../assets/gambar/Desain/Button/Kapan.png"
import imgDimana from "../assets/gambar/Desain/Button/Dimana.png"
import imgSiapa from "../assets/gambar/Desain/Button/Siapa.png"
import imgApa from "../assets/gambar/Desain/Button/Apa.png"
import imgBerapa from "../assets/gambar/Desain/Button/Berapa.png"
//end tanya

//arah
import audioAtas from "../assets/audio/Atas.m4a"
import audioBawah from "../assets/audio/Bawah.m4a"
import audioKanan from "../assets/audio/Kanan.m4a"
import audioKiri from "../assets/audio/Kiri.m4a"
import audioDepan from "../assets/audio/Depan.m4a"
import audioBelakang from "../assets/audio/Belakang.m4a"

import imgAtas from "../assets/gambar/Desain/Button/Atas.png"
import imgBawah from "../assets/gambar/Desain/Button/Bawah.png"
import imgKanan from "../assets/gambar/Desain/Button/Kanan.png"
import imgKiri from "../assets/gambar/Desain/Button/Kiri.png"
import imgDepan from "../assets/gambar/Desain/Button/Depan.png"
 import imgBelakang from "../assets/gambar/Desain/Button/Belakang.png"

//end arah

//kata sakti
import audioMaaf from "../assets/audio/Maaf.m4a"
import audioTolong from "../assets/audio/Tolong.m4a"
import audioTerimakasih from "../assets/audio/Terima Kasih.m4a"

import imgMaaf from "../assets/gambar/Desain/Button/Maaf.png"
import imgTolong from "../assets/gambar/Desain/Button/Tolong.png"
import imgTerimakasih from "../assets/gambar/Desain/Button/Terima Kasih.png"
//end kata sakti

//emosi
import audioSenang from "../assets/audio/Senang.m4a"
import audionSedih from "../assets/audio/Sedih.m4a"
import audioMarah from "../assets/audio/Marah.m4a"
import audioTakut from "../assets/audio/Takut.m4a"

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
