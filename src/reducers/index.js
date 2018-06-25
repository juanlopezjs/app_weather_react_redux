import { combineReducers } from 'redux';
import search from './reducer_search_bar';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  search,
  weather: WeatherReducer
});

export default rootReducer;
