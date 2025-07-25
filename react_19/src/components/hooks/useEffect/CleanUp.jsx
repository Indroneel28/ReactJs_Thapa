import { useEffect, useState } from "react";
import "./index.css";

export const CleanUp = () => {
    const [count, setCount] = useState(0);

    //Don't do it!!
    //   setInterval(()=>{
    //     setCount(count+1);
    //   },1000);

    useEffect(()=>{
        const timer= setInterval(()=>{
            setCount((prev)=>prev+1)
        },1000)
        
        //clean up function
        return () => clearInterval(timer);
    },[]);

    return (
        <div className="container">
            <div className="counter">
                <p>My Subscribers on Youtube</p>
                <div className="odometer" id="odometer">
                    {count}
                </div>
                <h3 className="title">
                    Subscribers <br /> Realtime Counter
                </h3>
            </div>
        </div>
    );
};
