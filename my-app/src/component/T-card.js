import React from 'react'
import "../styles/T-card.scss";
import cardsData from "../localData/cardsData.json"

export const Tcard = () => {
    
  return (
    <div className='tcard'>
      <div className='tcard-sub'  > 
        {  cardsData.map((card, i) => {
                { console.log(card.img);}
           return (
           
            <div className='tcard-individual' key={i}> 
            <video className= "tcard-image"  autoPlay  muted>
               <source src={require("../images/vedio.mp4")} type="video/mp4" />
               </video>
            
     
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
