import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

/*calculo del Promedio de los datos*/
const average = (data) => {
    return _.round(_.sum(data)/data.length);
}

/*Component chart */
export default (props) => (
    <div>
        <Sparklines 
            data={props.data} 
            width={180} 
            height={120}>
            <SparklinesLine color={props.color}/>
            <SparklinesReferenceLine type="avg"/>
        </Sparklines>
        <div>{average(props.data)} {props.units}</div>
    </div>
);