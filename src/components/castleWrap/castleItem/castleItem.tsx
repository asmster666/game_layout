import React from 'react';
import Knight from '../../../img/recent_up.png';
import {About} from '../../aboutUs/abousUs';

import './castleItem.sass';

export default function CastleItem(): JSX.Element {
    return (
        <div className="castleItem">
            <img src={Knight} alt="knight"/>
            <About classInf={"text-wrap castleItem_wrap"} />
        </div>
    )
}