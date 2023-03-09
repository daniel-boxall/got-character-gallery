import React from 'react'
import characterData from '../data/characterData.json'
import Character from './Character'

const CharacterGallery = () => {
    const listOfChars = characterData.map((char, i) => <Character {...char} key={i} />)
    return (
        <div
            className='gallery-container' data-test='char-gallery'>
            {listOfChars}
        </div>
    );
};

export default CharacterGallery;