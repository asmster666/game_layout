import React from 'react';

import './footerGroup.sass';

const FooterGroup = (props: {name: string, arr: string[]}) => {
    return (
        <div className="footer-group">
            <div className="footer-group_name">{props.name}</div>
            <ul>
                {props.arr.map(item => <li>{item}</li>)}
            </ul>
        </div>
    )
}

export default FooterGroup;