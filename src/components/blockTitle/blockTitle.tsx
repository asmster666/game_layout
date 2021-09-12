import React from 'react';

import './title.sass';

export default function Title(props: {text: string}) {
    return (
        <div className="title_block">
            <div className="blur-text">{props.text}</div>
            <span>{props.text}</span>
        </div>
    )
}