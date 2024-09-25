import './App.scss'
import BalanceBlock from './components/BalanceBlock/BalanceBlock'
import Hero from './components/Hero/Hero'
import TransactionBlock from './components/TransactionBlock/TransactionBlock'

function App() {
  return (
    <>
      <Hero/>
      <section className="main">
        <BalanceBlock/>
        <TransactionBlock/>
      </section>
    </>
  )
}

export default App
