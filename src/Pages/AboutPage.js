/**
 * @Author: Ayush Ranjan
 * @Date:   2022-02-08 23:20:54
 * @Last Modified by:   Ayush Ranjan
 * @Last Modified time: 2022-02-10 00:48:08
 */
import React from 'react'
import styled from 'styled-components';
import ImageSection from '../Components/ImageSection';
import Title from '../Components/Title';
import {MainLayout} from '../styles/Layouts';
import ServicesSection from '../Components/ServicesSection';
import ReviewsSection from '../Components/ReviewsSetion';

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled >
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <ServicesSection />
                {/* <ReviewsSection /> */}
            </AboutStyled >
        </MainLayout>
    )
}

const AboutStyled = styled.section`
    
`;

export default AboutPage
