import React from 'react';
const Card=(props)=>{
    return (
        <div className='bg-light-pink dib br4 shadow bw4 pa2 grow  '>
            <img src={`https://robohash.org/${props.id}?100X100`} alt='robo'/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}
export default Card;