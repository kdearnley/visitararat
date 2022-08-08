import React from 'react';

function FoodCard(props) {
    return (
        <div className="card_item">
            <div>
                <a href={props.url} target='_blank' rel="noreferrer">
                        <div>
                            <img
                                className='card_item_img'
                                alt='Food'
                                src={props.src}
                            />
                        </div>
                </a>
            </div>
            <div>
                        <div className="card_text">
                            <h3>{props.title}</h3>
                            <h5>{props.text1}</h5>
                            <h5>{props.text2}</h5>
                        </div>
            </div>
        </div>

);
}

            export default FoodCard;