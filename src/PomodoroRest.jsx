
import { useEffect, useState } from "react";

const COUNTDOWN_INITIAL_TIME = 5 * 60; // 300 segundos em 10 minutos


function PomoRest() {

    const [time, setTime] = useState(COUNTDOWN_INITIAL_TIME);
    
    useEffect(() =>{
        if(time > 0){
            setTimeout(() => {
                setTime(state => state -1);
            },1000)
        }else{
            alert("Terminou o Timer");
        }
    }, [time]);


    const minute = Math.floor(time /60);
    const secund = time % 60;


    return(
        <div>
            <h1>
                <span class="badge badge-secondary">{String(minute).padStart(2, '0')}</span>
                <span>:</span>
                <span class="badge badge-secondary">{String(secund).padStart(2, '0')}</span>
            </h1>
        </div>
    )
}

export default PomoRest;