import * as React from 'react';

function CustomDate() {
    let [date, setDate] = React.useState("");
    //let date : string = "";
    
    let getDate=() => {
        setDate (new Date().toDateString());

    }
    let [time, setTime] = React.useState("");
    //let date : string = "";
    
    let getTime=() => {
        setTime (new Date().toTimeString());

    }
    return(
        <div>
            {date}
            <button onClick = { getDate }>
                Get the date
            </button>
            <br></br>
            {time}
            <button onClick = {getTime}>
                Get the time
            </button>
        </div>
    )
    
}

CustomDate.displayName ='CustomDate'

export {
    CustomDate
}