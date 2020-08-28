import React from 'react'
import {Input} from 'reactstrap'

const CounterInput = (props) => {
    return(
        <div>
            <Input className="text-center" size="3" value={props.contador}/>
        </div>
    )
}
export default CounterInput;