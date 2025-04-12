import React, { useEffect } from 'react'
import "../styles/t-cardStyling/T-card.scss";
import cardsData from "../localData/cardsData.json"
import { useNavigate } from 'react-router-dom';
export const Tcard = () => {
  const navigate = useNavigate();
  
  const urlPath = window.location.pathname; 

    const handleClick = () => {
          navigate("/Treatments")
    }

    if (urlPath === "/Treatments" ) {
      return ( 
        <div className='tcard'>
        <div className='tcard-sub'  > 
        <div className='t-card-cards'> 
        { 
    cardsData.map((card, i) => (
        <div className='tcard-individual' key={i}>
          <img className="tcard-image" src={card.img} alt={card.diseaseName} />
  
          <div className='tcard-details'>
            <h4 className='tcard-heading'>{card.diseaseName}</h4>
        
            <p  className=' tcard-treatments-only'>{`${card.description}`}</p>          
          </div>
        </div>
      ))
  }
    </div>
  </div>
      </div>)
    } else {

        
      return ( 
        <div className='tcard'>
        <div className='tcard-sub'  > 
        <div className='t-card-cards'> 
        { 
    cardsData
      .filter((card, i) => i < 4) // Only keep the first 4 items
      .map((card, i) => (
        <div className='tcard-individual' key={i}>
          <img className="tcard-image" src={card.img} alt={card.diseaseName} />
  
          <div className='tcard-details'>
            <h4 className='tcard-heading'>{card.diseaseName}</h4>
        
            <p className='tcard-description'>{`${card.description.substring(0, 100)}....`}</p>
           
          </div>
        </div>
      ))
  }
    </div>
  
    <div className='t-card-nav'> 
       <button  className='t-card-button'onClick={handleClick}> See all </button>
    </div> 
  </div>
      </div>)
     
    
  
    }

   
     
    

  
 

  
  }
   

