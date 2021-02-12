import React from "react";
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'It is chilly',
        iconName: 'snowflake'
    }
}

interface Props {
    lat: number;
}
const getSeason = (lat: number, month: number) =>  {
     if (month > 2 && month < 9) {
         return lat > 0 ? 'summer' : 'winter';
     } else {
         return lat > 0 ? 'winter' : 'summer';
     }
}


const SeasonDisplay = (props: Props) => {
    const season =  getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h2>{text}</h2>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
}

export default SeasonDisplay;