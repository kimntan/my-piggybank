import './BalanceBlock.scss';

export default function BalanceBlock() {
  const balance = 296.75;

  return (
    <div className="balance">
      <h3 className="balance__heading">Your piggy bank balance is</h3>
      <span className="balance__total">$ {balance}</span>
    </div>
  )
}