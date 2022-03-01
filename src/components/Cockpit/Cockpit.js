import React, {useEffect, useRef} from 'react';

const Cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    // toggleBtnRef.current.click();


    useEffect(()=>{
        //after render cycle.
        console.log(`[COCKPIT JS] useEffect`);
        // setTimeout(()=>{
        //     alert(`save data to cloud! `)
        // }, 1000);
        //cleanup
        toggleBtnRef.current.click();
        return()=>{
            console.log(`COCKPIT JS cleanup`)
        }
    }, []);

    useEffect(()=>{
        console.log('[COCKPIT JS 2nd useEffect]');
        return ()=>{
            console.log('[COCKPIT JS 2nd USE EFFECT CLEANUP]');
        }
    })

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1x solid blue',
        padding: '8px',
        cursor: 'pointer'
      }
    return (
        <div>
            <h1>Hi, Im {props.title}</h1>
            <p>Im learing React</p>
            <p>{props.personsLength}</p>
            <button
            ref={toggleBtnRef}
                style={style}
                onClick={props.clicked}>Toggle Persons</button>
            <button onClick={props.login} style={style}>Login</button>
        </div>
    );
}

export default React.memo(Cockpit);