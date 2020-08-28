import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

const Producto = (props) => {
    alert(props.nombre)
    alert(props.image)
    return (
      <div>
        <Card>
          <CardImg top width="100%" src={props.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{props.nombre}</CardTitle>
            <CardSubtitle>{props.marca}</CardSubtitle>
            <CardText>{props.descripcion}</CardText>
            <CardText>{props.precio}</CardText>
            <Button className="text-right bold">Comprar</Button>
          </CardBody>
        </Card>
      </div>
    );
  };
  
  export {Producto};