import React from 'react';
import CastleItem from './castleItem/castleItem';

import './castleWrap.sass';

const CastleWrap = () => {
    return (
        <div className="castle_block">
            <div className="castle_block-blue">
                <div className="container_wrap">
                    <div className="choice-panel">
                        <div className="active">Live Streaming</div>
                        <div>Upcoming Challenges</div>
                        <div>Recent Famous Games</div>
                    </div>
                    <CastleItem />
                </div>
            </div>
        </div>
    )
}

export default CastleWrap;