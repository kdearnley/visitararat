import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the highlight's of Ararat</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={process.env.PUBLIC_URL + '/images/j-ward.jpg'}
              text='JWard & Aradale: Tour the Dark Past of these Asylums'
              label='Tour'
              path='/jward'
            />
            <CardItem
              src={process.env.PUBLIC_URL + '/images/ararat-gallery-tama.jpeg'}
              text='Ararat Gallery TAMA: Take in some Art'
              label='Culture'
              path='/araratgallerytama'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={process.env.PUBLIC_URL + '/images/gumsan.jpg'}
              text='Gum San: Chinese Heritage Centre'
              label='History'
              path='/gum-san'
            />
            <CardItem
              src={process.env.PUBLIC_URL + '/images/LangiMorgala5.jpg'}
              text='Langi Morgala: Regional History'
              label='History'
              path='/langi-morgala'
            />
            <CardItem
              src={process.env.PUBLIC_URL + '/images/greenhilllake.jpg'}
              text='Green Hill Lake: Free Camping'
              label='Nature'
              path='/green-hill-lake'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;