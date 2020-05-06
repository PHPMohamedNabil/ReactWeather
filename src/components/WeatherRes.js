import React from 'react';


const WeatherRes = (props)=>{

    
           return (
                <div className="info">
                    {
                      
                      props.temprature && 
                      <p className="info_key">
                         <span className="info-value"> temprature : {props.temprature}</span>
                      </p>
                    }
                     {
                      props.city && 
                      <p className="info_key">
                          <span className="info-value">City : {props.city}</span>
                      </p>
                    }
                     {
                      props.country &&
                      <p className="info_key">
                         <span className="info-value">  Country : {props.country}</span>
                      </p>
                    }
                     {
                      props.humidity && 
                      <p className="info_key"> 
                          <span className="info-value"> Humidity : {props.humidity}</span>
                      </p>
                    }
                     {
                      props.description && 
                      <p className="info_key">
                         <span className="info-value"> Description : {props.description}</span>
                      </p>
                    }
                   
                </div>
           )
    
}


export default WeatherRes;