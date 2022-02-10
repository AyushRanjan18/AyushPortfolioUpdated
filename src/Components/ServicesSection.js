/**
 * @Author: Ayush Ranjan
 * @Date:   2022-02-08 23:20:54
 * @Last Modified by:   Ayush Ranjan
 * @Last Modified time: 2022-02-10 00:46:58
 */
import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.png';
import webDev from '../img/webDev.jpg';
import business from '../img/business.jpg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'WORKS'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'UI/UX Project'} 
                        paragraph={'A Demo Project to demonstrate my skills on UI/UX on Figma'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={webDev} 
                            title={'Front-End Web Development'} 
                            paragraph={'Tried hands on Web Technologies, made several web applications using HTML, CSS, JavaScript and React JS'}
                        />
                    </div>
                    <ServiceCard 
                        image={business} 
                        title={'Business Consulting/Sales'} 
                        paragraph={'Proficiency in handling business operations like Guestimation, Work prioritization and management etc.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
