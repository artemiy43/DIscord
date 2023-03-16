import './Member.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Member(props) {
  
  return (
    <div className="Member">
      {/* <img className='Member__img' alt='picturee' src={props.img}></img> */}
      <Carousel showThumbs={false} showStatus={false}>
          {props.images.map(item => (
            <img key={item.id} className='Member__img' alt='picturee' src={item.img}></img>
          ))}
	    </Carousel>
      <p>Ник: {props.nickname}</p>
      <p>Имя: {props.name}</p>
    </div>

    // <Carousel>
    //   <div className='black'></div>
    //   <div className='blue'></div>
    //   <div className='red'></div>
	  // </Carousel>
  );
}

export default Member;
