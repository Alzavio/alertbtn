import React, {useState} from 'react';
import AlertButton from "./AlertButton";

function Toolbar(props) {
    const [child, setChild] = useState("");
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <AlertButton message={"This is button 1"} children={setChild} />
                <AlertButton message={"And this is button 2"} children={setChild} />
                <AlertButton message={"This is button 3"} children={setChild} />
            </div>
            {child ? <div style={{position: "absolute", top: "50%", right: "50%", border: "1px black solid", backgroundColor: "white", padding: "10px", height: "2rem"}} >
                {child}
            </div> : ""}
        </>
    );
}

export default Toolbar;