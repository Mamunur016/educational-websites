import React from 'react';
import { Image } from 'react-bootstrap';
import img from '../../images/giphy.gif'

const Thumbs = () => {
    return (
        <div>
            <Image src={img}></Image>
        </div>
    );
};

export default Thumbs;