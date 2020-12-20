import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
 
const MovieCard = ({movieId,name ,seats}) => {

 const [movieID,setMovieID] =useState(movieId)
 const [seatsShow,setSeatsShow] =useState(false);
 const [seatCount,setSeatCount]=useState(0);
 const [showLimitMsg,setShowLimitMsg]=useState(false);
 const [modifedSeats,setModifiedSeats]=useState({});
  
 
 const [startDate, setStartDate] = useState(null);
    
 const handleDateChange = (date)=> {
        setStartDate(date);
        setSeatsShow(true);
}

  const handleSeatClick=(id)=>{
    
   
        if(seatCount<10) { 
            setSeatCount(seatCount+1)
             const bookingNowSeats= seats.find(seat=>{
              if(seat.id==id){
               seat.booked=true;
               return true;
             }
         })
         
         const newSeats= [...seats]
            setModifiedSeats(newSeats);
              }
        else{
            setShowLimitMsg(true)
        }
    }

    const handleBooking = () =>{
        fetch('http://localhost:8000/booking', {
            method: 'POST',
            body: JSON.stringify({
                id:movieID,
                bookedSeats: modifedSeats,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
  .then((response) => response.json())
  .then((json) => console.log(json));
    }

    return (
        <div className="my-5">
        <small>Id:{movieId}</small>
          <h3>MovieName: {name}</h3>


          <DatePicker selected={startDate} onChange={date =>handleDateChange(date)} />
          {
              seatsShow && 
           
              <div className="my-3">
                 <h3>Choosen Seats  {seatCount}</h3>

                 {
                   showLimitMsg && 
                   <p>You can not book morethan 10 tickets at a time</p>
                 }
                 
                 {
                      seats.map(seat =>
                        //checking if seat is booked or not if booked icon color will be red and it's not clickable
                        seat.booked?
                        
                        <i 
                            onClick={()=>handleSeatClick(seat.id)}
                            style={{color:'red',cursor:"pointer",pointerEvents:"none"}}
                            className="fa fa-user fa-2x mx-3 " 
                            aria-hidden="true"> 
                           <small>{seat.id}</small> 
                        </i>
                        :
                        <i 
                        onClick={()=>handleSeatClick(seat.id)}

                        style={{color:`green`,cursor:"pointer"}}
                        className="fa fa-user fa-2x mx-3 " 
                        aria-hidden="true"> 
                       <small>{seat.id}</small> 
                    </i>
                     
                        )
                 }
                 <br/>
                 <button 
                   onClick={()=>handleBooking(movieId)}
                    className="btn btn-primary"
                   >
                   Book Now
                 </button>
                </div>
          }
        </div>
    );
};

export default MovieCard;