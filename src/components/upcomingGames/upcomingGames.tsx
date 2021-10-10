import React from 'react';
import GameItem from '../upcomingGames/gameItem/gameItem';
import Title from '../blockTitle/blockTitle';

import Game1 from '../../img/b_map1.png';
import Game2 from '../../img/b_map2.png';
import Game3 from '../../img/b_map3.png';
import Game4 from '../../img/b_map4.png';
import './upcomingGames.sass';

export default function Games(): JSX.Element {

    interface GameParams {
        img: any,
        text: string
    }

    const gamesInfo = [
        {
            img: Game1,
            text: 'Best Ps4 Games',
        },
        {
            img: Game2,
            text: 'World Dart 2019',
        },
        {
            img: Game3,
            text: 'New XBox Games',
        },
        {
            img: Game4,
            text: 'American Football',
        },
    ] as GameParams[]

    return ( 
        <div className="games_block">
            <div className="container_wrap">
                <Title text={'Upcoming Games'} /> 
                <div className="games_wrap">
                    {
                        gamesInfo.map((game, i) => {

                            return (
                                <GameItem key={i} img={game.img} text={game.text} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}