import React from 'react';
import Counter from './CounterClass';
import Counter2 from './CounterFunction';

const Home = (props) => {
    return (
        <div className="container-fluid">
            <div style={{textAlign:"center"}}>
                {props.greeting} <label style={{fontWeight:"bolder"}}>{props.nombre}</label>
            </div>
            <div className="row justify-content-center">
                <div className="col-6 d-flex justify-content-center">
                    <Counter max="10" min="0" />
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <Counter2 max="10" min="0" />
                </div>
            </div>
        </div>
    );
  }
  
  export default Home;