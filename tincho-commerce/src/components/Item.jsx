import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap';
import CounterFinal from '../components/CounterFinal';

const Item = (props) => {
    const onAdd = (count) => {
      alert(`SE AGREGARAN ${count} ${props.nombre}`);
    }

    return (
      <Card style={{margin:"2px"}}>
        <CardBody>
          <CardImg top width="100%" src={props.image} alt="Card image cap" />
          <CardTitle className="font-weight-bolde">{props.nombre}</CardTitle>
          <CardText>{props.autor}</CardText>
          <CardText className="text-right font-weight-bolder">{props.precio}</CardText>
        </CardBody>
        <CounterFinal initial="5" min="0" max="10" onAdd={onAdd}/>
      </Card>
    );
  };
  
  export default Item;