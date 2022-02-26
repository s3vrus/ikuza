import React from 'react'
import './styles.scss'
import Header from './components/Header'
import meep from './images/meep.png'

function App() {
  return (
    <div>
      <Header />
      <img src={meep} className='meep' alt=''/>
      <main className='wrapper'>
        <section id='mint'>
          <h1 className='large-heading'>
            TAKE THE BLUE BEAN
          </h1>
          <div className='mint-box'>
            <p>0.01 ETH</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
