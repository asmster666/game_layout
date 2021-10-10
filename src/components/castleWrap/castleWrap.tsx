import React, { useState } from 'react';
import CastleItem from './castleItem/castleItem';
import Tabs, { TabPane } from 'rc-tabs';

import './castleWrap.sass';

export default function CastleWrap() {

    return (
        <div className="castle_block">
            <div className="castle_block-blue">
                <div className="container_wrap">
                    <ActiveTab />
                    <CastleItem />
                </div>
            </div>
        </div>
    )
}

function ActiveTab():JSX.Element {

    let arr: string[] = ['Live Streaming', 'Upcoming Challenges', 'Recent Famous Games'];

    const [isActive, setIsActive] = useState(Array(3).fill(false));

    return (
        <div className="choice-panel">
            {
                arr.map((item:string, idx) => {
                    return <div key={idx} className={isActive && "panel-wrap"}>
                        <div className="panel-wrap_item">{item}</div>
                        </div>
                })
            }
        </div>
    )
}