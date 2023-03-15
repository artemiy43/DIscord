import './Members.css';
import Member from '../Member/Member';
import React from 'react';
import imgNikita from '../images/Никита.jpg'
import imgNikita1 from '../images/Никита1.jpg'
import imgVera from '../images/Вера1.jpg'
import imgSasha from '../images/Саша.jpg'
import imgAlbert from '../images/Альберт1.png'
import imgAnya from '../images/Аня.png'
import imgArtem from '../images/Я.png'
function Members() {

  let Sasha = {     
    name: "Саша",  
    nickname: 'Карамелина',
    img:  imgSasha       
  };

  let Artem = {     
    name: "Артём",  
    nickname: 'Joe',
    img:  imgArtem      
  };

  let Vera = {     
    name: "Вера",  
    nickname: 'Kuro4ka',
    img:  imgVera        
  };

  let Albert = {     
    name: "Альберт (Альбом)",  
    nickname: 'экрарутце44',
    img:  imgAlbert         
  };

  let Nikita = {     
    name: "Никита",  
    nickname: 'китайская подошва',
    img:  imgNikita1        
  };

  let Anya = {     
    name: "Аня",  
    nickname: 'маленький попуск',
    img:  imgAnya         
  };

  return (
    <div className='Members'>
      <h1 className='Members__title animated' data-anijs="if:click, on: h1, do: bounce animated">Администрация "Боженька"</h1>
      <p className='Members__text'>Элита канала с особой ролью "Боженька". Уполномочены следить за порядком и безопасностью.</p>
      <div className="Members__container">
        <Member name={Sasha.name} nickname={Sasha.nickname} img={Sasha.img}/>
        <Member name={Artem.name} nickname={Artem.nickname} img={Artem.img}/>
        <Member name={Vera.name} nickname={Vera.nickname} img={Vera.img}/>
        <Member name={Albert.name} nickname={Albert.nickname} img={Albert.img}/>
        <Member name={Nikita.name} nickname={Nikita.nickname} img={Nikita.img}/>
        <Member name={Anya.name} nickname={Anya.nickname} img={Anya.img}/>
      </div>
    </div>
  );
}

export default Members;
