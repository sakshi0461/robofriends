import React from 'react';
const Searchbox=({searchfield,searchChange})=>{
    return (
  <div className='pa2' >
 <input 
    className='bg-light-green dib br3 pa3 grow bw2 shadow-10 black '
    type='search' 
    placeholder='search robots'
    onChange={searchChange}
    />
  </div>
    );
}
export default Searchbox;