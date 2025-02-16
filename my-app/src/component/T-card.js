import React from 'react'
import "../styles/T-card.scss";
import cardsData from "../localData/cardsData.json"

export const Tcard = () => {
    
  return (
    <div className='tcard'>
      <div className='tcard-sub'  > 
        {  cardsData.map((card, i) => {
    
           return (
           
            <div className='tcard-individual' key={i}> 
            <img className="tcard-image" src={card.img} />

            
     
            <div className='tcard-details'> 
             <h4 className='tcard-heading'>{card.diseaseName}</h4>
             <p className='tcard-description'>{card.description} </p>
             </div>
       
        </div>)
    
        })
    
    }

</div>
    </div>
  )
}
