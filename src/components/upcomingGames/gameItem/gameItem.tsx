import React from 'react';

const GameItem = (props: {text: string}) => {
    return (
        <div className="game_item">
            <div className="game_item-backgr">{props.text}</div>
        </div>
    )
}

export default GameItem;