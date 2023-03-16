import './Members.css';
import Member from '../Member/Member';
import React from 'react';

import imgVanya1 from '../images/Ваня1.png'
import imgVanya2 from '../images/Ваня2.png'
import imgVanya3 from '../images/Ваня3.jpg'

import imgSonya1 from '../images/Соня1.jpg'
import imgSonya2 from '../images/Соня2.jpg'
import imgSonya3 from '../images/Соня4.PNG'

import imgKirill1 from '../images/Кирилл1.jpg'
import imgKirill2 from '../images/Кирилл2.jpg'
import imgKirill3 from '../images/Кирилл3.jpg'

import imgYarik from '../images/Ярик.png'

import imgAlbert from '../images/Альберт1.png'
import imgAlbert2 from '../images/Альберт.png'
import imgAlbert3 from '../images/Альберт2.jpg'

import imgAnya from '../images/Аня.png'
import imgAnya2 from '../images/Аня4.jpg'
import imgAnya3 from '../images/Аня5.jpg'

import imgArtem from '../images/Я.png'
import imgArtem2 from '../images/Я4.jpg'
import imgArtem3 from '../images/Я3.jpeg'

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
      { id: 1, img: imgVanya3},
      { id: 2, img: imgVanya3 },
      { id: 3, img: imgVanya3 }
    ]         
  };

  let Yarik = {     
    name: "Ярик",  
    nickname: 'Matsey',
    images: [
      { id: 1, img: imgYarik },
      { id: 2, img: imgYarik },
      { id: 3, img: imgYarik }
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
      { id: 1, img: imgVanya3 },
      { id: 2, img: imgVanya3 },
      { id: 3, img: imgVanya3 }
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
      </div>
    </div>
  );
}

export default Members;
