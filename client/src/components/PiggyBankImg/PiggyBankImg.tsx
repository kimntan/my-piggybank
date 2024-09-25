import PiggyImage from '../../assets/images/piggy-bank.png';
import './PiggyBankImg.scss';

export default function PiggyBankImg () {
  return (
    <>
      <img src={PiggyImage} alt="Piggy Bank" className="piggy-img"/>
    </>
  )
}