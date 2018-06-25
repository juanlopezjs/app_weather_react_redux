import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    render(){
        return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Ciudad</th>
                    <th>Temperatura (C)</th>
                    <th>Presión (hPa)</th>
                    <th>Humedad (%)</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.weather.map((data)=>{
                        const temp = _.map(data.list.map(weather => weather.main.temp),(temp) => temp - 273);
                        const pres = data.list.map(weather => weather.main.pressure);
                        const humd = data.list.map(weather => weather.main.humidity);
                        const {lon, lat} = data.city.coord;
                       
                        
                        return (
                            <tr key={data.city.name}>
                                <td>
                                    <GoogleMap lon={lon} lat={lat}/>
                                </td>
                                <td>
                                    <Chart data={temp} color="#ffb733" units="C"/>
                                </td>
                                <td>
                                    <Chart 
                                        data={pres} color="#169820" units="hPa"/>
                                </td>
                                <td>
                                    <Chart 
                                        data={humd} color="#165698" units="%"/>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
    }
}

const mapStateToProps = ({weather}) => {
    return {
        weather
    }
}

export default connect(mapStateToProps)(WeatherList)
