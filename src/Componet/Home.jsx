import React from 'react';

import Banner from './Banner';
import Service from './Service';
import Philospy from './Philospy';
import Book from '../Book';

const Home = () => {
    return (
        <div className='m-0'>
            
            <Banner></Banner>
            <Service></Service>
            <Philospy></Philospy>
            <Book></Book>
        </div>
    );
};

export default Home;