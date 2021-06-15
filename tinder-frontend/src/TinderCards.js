import React,{useState,useEffect} from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from './axios';
function TinderCards() {
    const[people,setpeople]=useState([]);

    useEffect(() => {
       async function fetchData(){
           const req=await axios.get("./tinder/card");

           setpeople(req.data);
           
       }
       fetchData();
    }, []);

    const swiped=(direction,nameToDelete)=>{
        console.log("removing"+nameToDelete);
    }
    const outofFrame=(name)=>{
        console.log(name+"left");
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards_Container">
            {people.map((person) => (
                <TinderCard 
                className="swipe" key ={person.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir) => swiped(dir,person.name) }
                onCardLeftScreen={()=>outofFrame(person.name)} 
                >
                    
                    <div style={ {backgroundImage: `url(${person.url})`}}
                    className="card">
                     <h3>{person.name}</h3>   
                    </div>
                </TinderCard>
            ))}
                </div>   
               
            
        </div>
    )
}

export default TinderCards
