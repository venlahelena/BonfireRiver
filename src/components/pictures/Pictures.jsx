import React, {  } from 'react';
import Carousel from 'react-elastic-carousel';

import './pictures.css';

import sauna from '../../assets/sauna.png'
import farm from '../../assets/farm.png'
import blacksmith from '../../assets/blacksmith.png'
import village from '../../assets/10.png'
import statue from '../../assets/statue.png'
import ahtihouse from '../../assets/ahtihouse.png'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];


function Pictures () {
    const items =[ {
        id: 1,
        src: sauna
    },
    {
        id: 2,
        src: farm
    },
    {
        id: 3,
        src: blacksmith
    },
    {
        id: 4,
        src: village
    },
    {
        id: 5,
        src: statue
    },
    {
        id: 6,
        src: ahtihouse
    },
]
    return (
        <div className='Pictures'>
        <Carousel breakPoints={breakPoints}>
            {items.map(item => <div key={item.id}><img src={item.src} width="390" height="240"/></div>)}
        </Carousel>
        </div>
    )
}

export default Pictures