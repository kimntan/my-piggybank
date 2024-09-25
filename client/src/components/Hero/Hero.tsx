import Menu from '../Menu/Menu';
import './Hero.scss';

export default function Hero() {
  const username = 'Thea';

  return (
    <div className='hero__container'>
      <Menu/>
      <h2 className='hero__greeting'>Hello {username}</h2>
    </div>
  )
}