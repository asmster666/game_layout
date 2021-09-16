import React, { useState } from 'react';
import CastleItem from './castleItem/castleItem';

import './castleWrap.sass';

export default function CastleWrap() {

    

    return (
        <div className="castle_block">
            <div className="castle_block-blue">
                <div className="container_wrap">
                    <div className="choice-panel">
                        <ActiveTab />
                    </div>
                    <CastleItem />
                </div>
            </div>
        </div>
    )
}

function ActiveTab():JSX.Element {

    let arr: string[] = ['Live Streaming', 'Upcoming Challenges', 'Recent Famous Games'];

    const [isActive, setIsActive] = useState(false)

    return (
        <div className="choice-panel">
            {
                arr.map((item:string, idx) => {
                    return <div key={idx} 
                        className={isActive ? "active" : ""}
                        onClick={() => setIsActive(!isActive)}
                        >{item}</div>
                })
            }
        </div>
    )
}