import React from "react";
import './Home.css';

function Cardstrct(props) {
  return (
    <>
     
         
        <div className="card1">
          <h1>{props.pakege}</h1>
          <div className="line1"></div>
          <h2>Staking Requirment</h2>
          <h1 >{props.stake_requirment}</h1>
          <h2>Staking Length Required</h2>
          <h1>{props.stake_length}</h1>
          <h2>Whitelist Requirement Twitter</h2>
          <h1>{props.WHitelist_requirment_twitter}</h1>
          <h2>{props.lottery}</h2>
          <h1>{props.lottery_ticket}</h1>
          <h2>{props.allocation}</h2>
          <h1>{props.granted_allocation}</h1>
          
        </div>
     



    </>
  )
}

export default Cardstrct;