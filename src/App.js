import React,{Component} from 'react';
import Form from './components/Form'
import WeatherRes from './components/WeatherRes';

const API_Key="4ed44f1b6ee3232b6e87518545a04eac";

class App extends Component{
  
  state= {
      city:'',
      country:'',
      humidity:'',
      description:'',
      temprature:'',
      error:''
  }

  getWeather = async (e) =>{
    e.preventDefault();
    const city    =e.target.elements.city.value;
    const country =e.target.elements.country.value;
    const api     = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`);
   
    const data    = await api.json();

     
    if( (city && country ) && api.status ===200)
    {
        console.log();
     this.setState({
      temprature:data.main.temp,
      city :data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:''
   });
    }
    else{
      this.setState({
        city:'',
        country:'',
        humidity:'',
        description:'',
        temprature:'',
        error:'Please Enter Data '
     });
    }
  }
  render(){
      return (
           <div className="wrapper">
             <div className="form-container">
               <Form getWeather={this.getWeather}/>
               <WeatherRes temprature={this.state.temprature} city={this.state.city} country={this.state.country} humidity={this.state.humidity} description={this.state.description} error={this.state.error}/>
             </div>
           </div>
      )
  }
}

export default App;
