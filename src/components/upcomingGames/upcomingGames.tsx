import React from 'react';
import GameItem from '../upcomingGames/gameItem/gameItem';
import Title from '../blockTitle/blockTitle';

import './upcomingGames.sass';

export default function Games(): JSX.Element {
    return (
        <div className="games_block">
            <div className="container_wrap">
                <Title text={'Upcoming Games'} />
                <div className="games_wrap">
                    <GameItem text={'Best Ps4 Games'} />
                    <GameItem text={'World Dart 2019'} />
                    <GameItem text={'New XBox Games'} />
                    <GameItem text={'American Football'} />
                </div>
            </div>
        </div>
    )
}