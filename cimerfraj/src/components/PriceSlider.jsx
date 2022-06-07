import React, {useState} from 'react';
import './PriceSlider.css';

const PriceSlider = () => {
    // price hook
    const [price, setPrice] = useState('150');

    return (
        <>
            <div className="slideBlock">
            <div className="strack"></div>
            <div className="slideProgress" style={{"width": (price/400*100) + "%"}}></div>
                <input
                    onChange={(e) => setPrice(
                        e.target.value >= 100 && e.target.value <= 400 ? e.target.value : '100'
                    )}
                    value={price}
                    type="range"
                    name="range"
                    id="range"
                    min="0" max="400" />
                <div className="Price">${price}</div>
            </div>
            <div className="imput_fields custom-imput-fields">
                <label className="price_prod">YOU PAY: <small>(US$)</small><br />
                    <input type="text" onChange={(e) => setPrice(e.target.value >= 0 && e.target.value <= 400 ? e.target.value : '0')} id="price_prod" name="price_prod" value={price} />
                </label>
            </div>
            <br /><br />
        </>
    );
}

export let price;
export default PriceSlider;