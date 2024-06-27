import React from 'react'
import ToolImage from './image.png'

const Card = (props) => {


  return (
      <div className='card'>
                <div id='toolImg'>
                    <img src={ToolImage} alt="" />
                </div>
                <div className="info">
                    <div className="title">
                        {props.element.title}
                    </div>
                    <div className="price">
                    &#8377; {props.element.price}
                    </div>
                </div>
        </div>
  )
}

export default Card
