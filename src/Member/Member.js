import './Member.css';
function Member(props) {

  return (
    <div className="Member">
      <img className='Member__img' alt='picturee' src={props.img}></img>
      <p>Ник: {props.nickname}</p>
      <p>Имя: {props.name}</p>
    </div>
  );
}

export default Member;
