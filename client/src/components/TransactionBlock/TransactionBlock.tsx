import './TransactionBlock.scss';

export default function TransactionBlock() {
  return (
    <div className="transaction">
      <h3 className="transaction__heading">Would you like to</h3>
      <div className="transaction__buttons">
        <button className="transaction__save-button">save</button>
        <span className='transaction__or'>or</span>
        <button className="transaction__spend-button">spend</button>
      </div>
    </div>
  )
}