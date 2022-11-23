import React from 'react';
import '../Styles/Display.css'
import candles from '../assets/image/candles.jpg'
import parfum from '../assets/image/parfum.jpg'

const Display = () => {
    return (
        <div className='display'>
            <div className='left'>
                <img src={candles} alt="" />
                <h6 className=''>Gifts for the home—Candles</h6>
                <p>Ptolemy, Aganice and Callippus—aromatic candles named for important figures of ancient astronomy—harken to age-old ceremonies of meditation and merriment alike.</p>
            </div>
            <div className='right'>
                <img src={parfum} alt="" />
                <h6>Othertopias Eaux de Parfum</h6>
                <p>Unorthodox and defiant, four fragrances of an intense character leave poignant traces in their wake—inspired by the hinterlands and liminal spaces of the boat, the shore, the wasteland and the mirror.</p>
            </div>
        </div>
    );
};

export default Display;