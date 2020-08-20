import React, { useState } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
  

const lupita = <FontAwesomeIcon icon={faSearch} />

const Searchbox = () => {
  return (
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>{lupita}</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Buscar..." />
      </InputGroup>
  );
}

export default Searchbox;