import React, {useState} from 'react';
import Card from '@mui/material/Card';
import showsData from '../../data/ShowsData'
import './ShowsCard.css'

export default function ShowsCard() {
  function checkDate(showDate: any){
    let now = new Date();
    let selectedDate = new Date(showDate);
    now.setHours(0,0,0,0);
    if (selectedDate < now) {
      //console.log("Selected date is in the past");
      return false;
    } 
    else {
      //console.log("Selected date is NOT in the past");
      return true;
    }    
  }
  const [shows, setShows] = useState(showsData.showsData)
  
  return (
    <Card className='shows-card'>
      <h2>Kommende Shows</h2>
      <ul>
        {shows.map((show) => {
        //console.log(show);
        return( 
        checkDate(show.date) && <li>{show.date} {show.city} {show.name}</li>
          )
        })}
        
      </ul>
      <h2>Vergangene Shows</h2>
      <ul>
      {shows.map((show) => {
        //console.log(show);
        return( 
        checkDate(show.date) == false && <li>{show.date} {show.city} {show.name}</li>
          )
        })}
      </ul>
    </Card>
  );
}