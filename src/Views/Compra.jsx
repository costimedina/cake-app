import React from 'react';
import ReactPlayer from "react-player";
import '../styles/compra.css';

function Compra() {
  return (
    <section className='caja-video'>
    <div className='pt-5'>
      <h1 className='text-center'>Aquí va un shopping cart</h1>

      <div className='video'>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=1crjPxst_cc"
        playing
        controls
      />
      </div>

    </div>
    </section>
  );
}

export default Compra;
