import React from 'react'
import './styles.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import meep from './images/meep.png'
import { MdCancel } from 'react-icons/md'
import { AiFillCheckCircle } from 'react-icons/ai'
import team1 from './images/team1.png'
import team2 from './images/team2.png'
import team3 from './images/team3.png'
// import { AiOutlineTwitter } from 'react-icons/ai'

// import girl from './images/girl23.png'

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='mint' className='wrapper'>
          <h1>
            TAKE THE BLUE BEAN
          </h1>
          <img src={meep} className='meep' alt=''/>
          <div className='mint-box'>
            <div className='mint-item'>
              <h2>0.01 ETH</h2>
              <h3>per IKUZA</h3>
            </div>
            <div className='mint-item'>
              <h2>10000</h2>
              <h3>AVAILABLE</h3>
            </div>
            <button className='mint-button'>COMING SOON</button>
          </div>
        </section>
        


        <section id='about'>
          <div className='wrapper'>
            <div className='spacer'></div>
            <div className='center'>
              <h1>
                WHAT IS IKUZA?
              </h1>
              <p>
              Ikuza is a brand. <br/>
              A new kind of brand that we build together. <br/>
              <strong>A brand for the metaverse. By the community.</strong> <br/><br/>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus 
              viverra vitae congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis 
              nunc sed augue lacus viverra.<br/><br/>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus 
              viverra vitae congue. <br/><br/>

              Take the Blue Bean. 
              </p>
            </div>
          </div>
          <div className='spacer'></div>
          <h1 className='r-header'>ROADMAP</h1>
        </section>



        <section id='roadmap'>
          <div className='wrapper'>
            <div className='roadmap-line'></div>
            <div className='roadmap-row'>
              <div className='roadmap-item'>
                <h2>MARCH 1</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra vitae congue.
                </p>
              </div>
              <div className='roadmap-completed'>
                <AiFillCheckCircle />
              </div>
            </div>
            <div className='roadmap-row'>
              <div className='roadmap-completed'>
                <MdCancel />
              </div>
              <div className='roadmap-item'>
                <h2>MARCH 24</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra vitae congue.
                </p>
              </div>
            </div>
            <div className='roadmap-row'>
              <div className='roadmap-item'>
                <h2>APRIL 6</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra vitae congue.
                </p>
              </div>
              <div className='roadmap-completed'>
                <MdCancel />
              </div>
            </div>
            <div className='roadmap-row'>
              <div className='roadmap-completed'>
                <MdCancel />
              </div>
              <div className='roadmap-item'>
                <h2>APRIL 27</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra vitae congue.
                </p>
              </div>
            </div>
          </div>
          <div className='spacer'></div>
        </section>



        <section id='team' className='wrapper'>
          <div className='spacer'></div>
          <h1>TEAM</h1>
          <div className='team-row'>
            <div className='team-item'>
              <img src={team1} className='team-img' alt=''/>
              <h2>LOREM IPSUM</h2>
              <h3>ARTIST</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
            <div className='team-item'>
              <img src={team2} className='team-img' alt=''/>
              <h2>LOREM IPSUM</h2>
              <h3>MARKETING</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
            <div className='team-item'>
              <img src={team3} className='team-img' alt=''/>
              <h2>LOREM IPSUM </h2>
              <h3>DEVELOPER</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
              </p>
            </div>
          </div>
          <div className='spacer'></div>
        </section>



      </main>
      <Footer />
    </div>
  );
}

export default App;
