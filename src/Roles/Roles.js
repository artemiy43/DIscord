import './Roles.css';

function Roles() {
  return(
    <div className='Roles'>
        <h1>Роли сервера</h1>
        <p>Пользователь получает роль за определённую активность на сервере. Здесь представлена только часть ролей.</p>
        <ul className='Roles__grid'>
            <li className='Roles__role'>Роль</li>
            <li className='Roles__description'>Описание роли</li>
            <li className='Roles__role'>Боженька</li>
            <li className='Roles__description'> Роль администрация сервера</li>
            <li className='Roles__role'>Полубоженька</li>
            <li className='Roles__description'>Роль для людей с примерным поведением</li>
            <li>
                <div className='Roles__role white'>Кот помойный</div>
                <div className='Roles__role'>Чмо</div>
                <div className='Roles__role'>Кринжуля</div>
            </li>
            <li className='Roles__description big'>Роль для людей с плохим поведением</li>
            <li className='Roles__role'>Кибермансер</li>
            <li className='Roles__description'>Роль для умелых игроков</li>
            <li className='Roles__role'>Киношник</li>
            <li className='Roles__description'>Роль для любителей совместного просмотра фильмов</li>
        </ul>
    </div>
  );
}

export default Roles;