import react from 'react';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import Cardstrct from './Cardstrct'
import Cards from './Card'
import img from './gfx-e.png'
import img2 from './assets/img/clients/bluezilla.png'

function ncard(val) {
  return (
    <Cardstrct
      pakege={val.pakege}
      stake_requirment={val.stake_requirment}
      stake_length={val.stake_length}
      WHitelist_requirment_twitter={val.WHitelist_requirment_twitter}
      lottery={val.lottery}
      lottery_ticket={val.lottery_ticket}
      allocation={val.allocation}
      granted_allocation={val.granted_allocation}
    />

  )

}

const Home = () => {
  return (

    <>
      <section className="hero-section">
        <h1>
          SPINEPAD IS THE FIRST DECENTRALIZED IDO PLATFORM
          <pre></pre>
          FOR THE BINANCE SMART CHAIN NETWORK.
        </h1>
      </section>

      <div className='main-div'>

        <button className='button button-margin'>View All Project</button>
        <button className='button1 button-margin'>Buy On PanCake Swap</button>
        <button className='button2 button-margin'>Apply For Ido</button>
        <button className='button3 button-margin'>Buy On Mexc</button>

      </div>
      <div className='sec-div' >
        <button className='button4'>Follow On Telegram</button>
        <button className='button4'>Follow Our Medium</button>
        <button className='button4'>Buy Our Twitter</button>
      </div>

      <h1 className='about-us' >
        ABOUT US
      </h1>
      <div className='about-div'>
        <p className="about-us1">

          <b>
            WHAT IS BSCPAD?
            <br></br>
            The BSC Launch Pad is the first decentralized IDO platform for the Binance Smart Chain Network.
          </b>
          <br></br>
          BSCPad will empower crypto currency projects with the ability to distribute tokens and raise liquidity.
          <br></br>
          <b>
            WHY CHOOSE US?
            <br></br>
            BSCPad has found a solution to incentivize and reward all token stakers in a way that is inclusive and with a low barrier to entry.
          </b>
          <br></br>
          The fundamental flaws of existing launchpads is that acquiring enough tokens to participate in the ecosystem is prohibitive, and even if you do stake the tokens, you are not guaranteed an allocation spot. They are based on a first come first serve basis where automated bots can fill the whitelist spots in a matter of seconds. BSCPad is creating fair decentralized launches, you can choose between a lottery tier or a guaranteed allocation tier and if you win the lottery you get a guaranteed allocation in the first round (Allocation round).

          The hallmark of the BSCPad is a two-round system that makes every tier level guaranteed an allocation. There is no first come first serve or bots; only fair distributed rewards for all participants.

        </p>
        <div className="loader"></div>

      </div> 
      <h1 className="grid grid-cols-1 justify-items-center py-2">
        THE BSCPAD TIERED SYSTEM
      </h1>
      <div className='system-div'>
        <p className='about-us2'>
          BSCPad will showcase a fixed tier system based on the number of tokens staked. Lottery Tiers will share 20% of total raise and rest 80% of the raise is assigned for guaranteed allocation tiers based on the pool weights assigned
        </p>
      </div>
      <h1 className="flex justify-center py-5 text-2xl">
        ROUND 1 - ALLOCATION ROUND
      </h1>

      {/* <div className='round-div'>
        {Cards.map(ncard)}
      </div> */}


      <h1 className='system-us'>
        ROUND 2 - FCFS ROUND
      </h1>
      <div className='about-div1'>
        <img alt='round2' className='img1' src={img}></img>
        <p className='round-2'>
          In round 2, the unsold tokens from the first round are made available on a FCFS basis, only to guaranteed tiers (Platinum and above). These members can purchase an additional amount that is determined by a tier-based formula. This round is open until all tokens are sold, typically lasting for only a few minutes. After all the tokens are sold, the IDO is concluded.
          <pre> </pre>
          <b>
            WE WILL BE COLLECTING BOTH DATA AND FEEDBACK ON THE IDO STRUCTURE IN ORDER TO OPTIMIZE THE SYSTEM OVER TIME AS WELL AS TAKING INTO CONSIDERATION COMMUNITY FEEDBACK AND POTENTIAL DAO PROPOSALS.
          </b>
          <pre> </pre>
          Our system is a predictable and provably fair system giving our users the proper incentives to accumulate and hold tokens and support each and every project launched. Over time, we will tweak weights, add new tiers and change other parameters as necessary to keep the system functional, competitive and rewarding for all community members.
          <pre> </pre>
          $BSCPAD is the next evolution of blockchain launchpads solving the fundamental flaws that plague existing launchpads. This platform benefits all holders of the token and allows for fair launches giving traders of all sizes the opportunity to invest in the best upcoming Binance Smart Chain projects.
        </p>

      </div>

      <h1 className="grid grid-cols-1 justify-items-center text-lg">
        INCUBATOR AND INVESTMENT PARTNER
      </h1>
      {/* <div className='card2-grid'>
        <div className='card2-grid-divider'> */}

      <div className="grid grid-cols-1 justify-items-center space-y-10 mt-20 " >
        <Card className=" max-w-sm ">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="max-w-sm ">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="max-w-sm">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>


        <div >
          <div className="loader1">
          </div>
        </div>


      </div>


      {/* </div>
        </div> */} 









    </>
  );
};


export default Home;


