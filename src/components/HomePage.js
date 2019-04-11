import React from 'react';
import styled from 'styled-components';

import Image from '../assets/home-background-image.png';

const HomePage = props => {
    return (
        <div type='home'>
            <BackgroundImage src={Image} alt='Small part of tree branch' />
            {/* 
                <MainNav />
                <SideNav />
                <ContinueReading />
                <TrendingArticles />
                <BuzzFromTheHive />
             */}
        </div>
    )
}

const BackgroundImage = styled.img`
    width: 100%;
`;

export default HomePage;