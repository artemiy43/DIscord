import './Admins.css';
import Member from '../Member/Member';
import React from 'react';

import imgNikita1 from '../images/Никита1.jpg'
import imgNikita2 from '../images/Никита6.jpg'
import imgNikita3 from '../images/Никита3.jpg'

import imgVera from '../images/Вера1.jpg'
import imgVera2 from '../images/Вера2.jpg'
import imgVera3 from '../images/Вера3.jpg'

import imgSasha from '../images/Саша.jpg'
import imgSasha2 from '../images/Саша2.jpg'
import imgSasha3 from '../images/Саша3.jpg'

import imgAlbert from '../images/Альберт1.png'
import imgAlbert2 from '../images/Альберт.png'
import imgAlbert3 from '../images/Альберт2.jpg'

import imgAnya from '../images/Аня.png'
import imgAnya2 from '../images/Аня6.gif'
import imgAnya3 from '../images/Аня5.jpg'
import imgAnya4 from '../images/Аня7.jpg'

import imgArtem from '../images/Я4.jpg'
import imgArtem2 from '../images/Я.png'
import imgArtem3 from '../images/Я3.jpeg'

function Admins() {

  let Sasha = {     
    name: "Саша",  
    nickname: 'Карамелина',
    images: [
      { id: 1, img: imgSasha },
      { id: 2, img: imgSasha2 },
      { id: 3, img: imgSasha3 }
    ]   
  };

  let Artem = {     
    name: "Артём",  
    nickname: 'Joe',
    images: [
      { id: 1, img: imgArtem },
      { id: 2, img: imgArtem2 },
      { id: 3, img: imgArtem3 }
    ]       
  };

  let Vera = {     
    name: "Вера",  
    nickname: 'Kuro4ka',
    images: [
      { id: 1, img: imgVera },
      { id: 2, img: imgVera2 },
      { id: 3, img: imgVera3 }
    ]         
  };

  let Albert = {     
    name: "Альберт (Альбом)",  
    nickname: 'бог пельменей',
    images: [
      { id: 1, img: imgAlbert },
      { id: 2, img: imgAlbert2 },
      { id: 3, img: imgAlbert3 }
    ]          
  };

  let Nikita = {     
    name: "Никита",  
    nickname: 'китайская подошва',
    images: [
      { id: 1, img: imgNikita1 },
      { id: 2, img: imgNikita2 },
      { id: 3, img: imgNikita3 }
    ]         
  };

  let Anya = {     
    name: "Аня",  
    nickname: 'маленький попуск',
    images: [
      { id: 1, img: imgAnya4 },
      { id: 2, img: imgAnya },
      { id: 3, img: imgAnya2 },
      { id: 4, img: imgAnya3 }
    ]          
  };

  // const images = [
  //   { id: 1, img: imgAnya },
  //   { id: 2, img: imgArtem },
  //   { id: 3, img: imgSasha }
  // ];

  return (
    <div className='Admins'>
      <h1>Администрация "Боженька"</h1>
      <p>Элита канала с особой ролью "Боженька". Уполномочены следить за порядком и безопасностью.</p>
      <div className="Admins__container">
        <Member name={Sasha.name} nickname={Sasha.nickname} images={Sasha.images}/>
        <Member name={Artem.name} nickname={Artem.nickname} images={Artem.images}/>
        <Member name={Vera.name} nickname={Vera.nickname} images={Vera.images}/>
        <Member name={Albert.name} nickname={Albert.nickname} images={Albert.images}/>
        <Member name={Nikita.name} nickname={Nikita.nickname} images={Nikita.images}/>
        <Member name={Anya.name} nickname={Anya.nickname} images={Anya.images}/>
      </div>
    </div>
  );
}

export default Admins;
