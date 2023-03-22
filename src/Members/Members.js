import './Members.css';
import Member from '../Member/Member';
import React from 'react';

import imgVanya1 from '../images/Ваня1.png'
import imgVanya2 from '../images/Ваня2.png'
import imgVanya3 from '../images/Ваня3.jpg'

import imgSonya1 from '../images/Соня1.jpg'
import imgSonya2 from '../images/Соня5.png'
import imgSonya3 from '../images/Соня4.PNG'

import imgKirill1 from '../images/Кирилл1.jpg'
import imgKirill2 from '../images/Кирилл2.jpg'
import imgKirill3 from '../images/Кирилл3.jpg'

import imgIvan1 from '../images/Иван1.jpg'
import imgIvan2 from '../images/Иван2.jpg'
import imgIvan3 from '../images/Иван3.jpg'

import imgFidan1 from '../images/Фидан1.jpg'
import imgFidan2 from '../images/Фидан2.jpg'
import imgFidan3 from '../images/Фидан4.jpg'

import imgGekk1 from '../images/Гекк1.jpg'
import imgGekk2 from '../images/Гекк2.jpg'
import imgGekk3 from '../images/Гекк3.jpg'

import imgYarik1 from '../images/Ярик1.jpg'
import imgYarik2 from '../images/Ярик2.jpg'
import imgYarik3 from '../images/Ярик3.jpg'

function Members() {

  let Sonya = {     
    name: "Соня",  
    nickname: 'соль экстра',
    images: [
      { id: 1, img: imgSonya1 },
      { id: 2, img: imgSonya2 },
      { id: 3, img: imgSonya3 }
    ]   
  };

  let Ivan = {     
    name: "Ваня",  
    nickname: 'Чебупелька',
    images: [
      { id: 1, img: imgIvan1 },
      { id: 2, img: imgIvan2 },
      { id: 3, img: imgIvan3 }
    ]   
  };

  let Kirill = {     
    name: "Кирилл",  
    nickname: 'дэбил',
    images: [
      { id: 1, img: imgKirill1 },
      { id: 2, img: imgKirill2 },
      { id: 3, img: imgKirill3 }
    ]       
  };

  let Anton = {     
    name: "Антон Гекк",  
    nickname: 'Кар-Карыч',
    images: [
      { id: 1, img: imgGekk1},
      { id: 2, img: imgGekk2 },
      { id: 3, img: imgGekk3 }
    ]         
  };

  let Yarik = {     
    name: "Ярик",  
    nickname: 'Matsey',
    images: [
      { id: 1, img: imgYarik1 },
      { id: 2, img: imgYarik2 },
      { id: 3, img: imgYarik3 }
    ]          
  };

  let Vanya = {     
    name: "Ваня",  
    nickname: 'Вор какашек',
    images: [
      { id: 1, img: imgVanya1 },
      { id: 2, img: imgVanya2 },
      { id: 3, img: imgVanya3 }
    ]         
  };

  let Fidan = {     
    name: "Фидан",  
    nickname: 'Фиданчик',
    images: [
      { id: 1, img: imgFidan1 },
      { id: 2, img: imgFidan2 },
      { id: 3, img: imgFidan3 }
    ]          
  };

  // const images = [
  //   { id: 1, img: imgAnya },
  //   { id: 2, img: imgArtem },
  //   { id: 3, img: imgSasha }
  // ];

  return (
    <div className='Members'>
      <h1>Завсегдатые сервера "Полубоженька"</h1>
      <p>Получили свою роль за примерное поведение и постоянную активность на сервере.</p>
      <div className="Members__container">
        <Member name={Sonya.name} nickname={Sonya.nickname} images={Sonya.images}/>
        <Member name={Anton.name} nickname={Anton.nickname} images={Anton.images}/>
        <Member name={Yarik.name} nickname={Yarik.nickname} images={Yarik.images}/>
        <Member name={Vanya.name} nickname={Vanya.nickname} images={Vanya.images}/>
        <Member name={Kirill.name} nickname={Kirill.nickname} images={Kirill.images}/>
        <Member name={Fidan.name} nickname={Fidan.nickname} images={Fidan.images}/>
        <Member name={Ivan.name} nickname={Ivan.nickname} images={Ivan.images}/>
      </div>
    </div>
  );
}

export default Members;
