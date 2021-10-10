import React from 'react';

import './gameItem.sass';

const GameItem = (props: {text: string, img: any}) => {
    return (
        <div className="game_item">
            <img src={props.img} alt=""/>
            <div className="game_item-backgr">{props.text}</div>
        </div>
    )
}
 
export default GameItem;