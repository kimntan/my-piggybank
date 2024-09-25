import './SpendSaveButtons.scss';

export default function SpendSaveButtons() {
  return (
    <div className="spend-save">
      <button className="spend-save__button spend-save__button--save">save</button>
      <button className="spend-save__button spend-save__button--spend">spend</button>
    </div>
  )
}