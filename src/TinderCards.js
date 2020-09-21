import React, {useState, useEffect} from 'react'
import './TinderCards.css'
import TinderCard from "react-tinder-card"
import { SwipeableDrawer } from '@material-ui/core'
import axios from './axios.js';

function TinderCards() {

    const  [people, setPeople] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const req = await axios.get('/tinder/card');
            setPeople(req.data);

        }

        fetchData();
    }, [])
        // {
        //     name: "Elon Musk",
        //     url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.theceomagazine.net%2Fwp-content%2Fuploads%2F2018%2F10%2F15093202%2Felon-musk-1100x733.jpg&f=1&nofb=1"

        // },

        // {
        //     name: "Jeff Bezos",
        //     url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WKH2LoDK5qCe84moErNGwQHaE7%26pid%3DApi&f=1"
        // },


    const swiped = (direction, nameToDelete) => {
        console.log("removing: ", nameToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name, " left the screen");
    }


    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map((person) => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
            >

                <div
                 style={{backgroundImage: "url(" + person.imgUrl + ")"}}
                 className="card"
                >
                <h3>{person.name}</h3>

                </div>

                </TinderCard>

                
            ))}
            </div>

        </div>
    )
}

export default TinderCards
