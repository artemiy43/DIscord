import './Description.css';

function Description() {

  return (
    <div className="Description">
        <div className='Description__container'>
            <h1 id='name' className='Description__title animate__animated animate__zoomIn'>Добро пожаловать на лучший Discord канал Mr Полночь!</h1>
            <p className='Description__text animate__animated animate__zoomIn animate__delay-2s'>Вас ждёт активное и позитивное комьюнити, совместные просмотры фильмов, прохождения игр и море кайфа!</p>
            <p className='Description__addText'>Информация на сайте актуальна на 13.03.2023</p>
        </div>
      <iframe className='animate__animated animate__fadeInDown animate__delay-2s' title='discord' src="https://discord.com/widget?id=801161781388640288&theme=dark" width="350" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    </div>
  );
}

export default Description;
