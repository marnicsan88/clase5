import React, { useState } from 'react';

const Home = (props) => {
    return (
        <div style={{textAlign:"center"}}>{props.greeting} <label style={{fontWeight:"bolder"}}>{props.nombre}</label></div>
    );
  }
  
  export default Home;