import React from 'react';
import './Banner.css'

function Banner(props) {
    return(
        <div className="Banner d-flex al-end" style={{ backgroundImage:`url(/${props.image})`}}>
              <div className="container">
                   <div className="title-painel displayFlex alignCenter">
                        <h1>{props.title}</h1>
                   </div>
              </div>
        </div>
    )
}



export default Banner