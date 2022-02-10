/**
 * @Author: Ayush Ranjan
 * @Date:   2022-02-08 23:20:54
 * @Last Modified by:   Ayush Ranjan
 * @Last Modified time: 2022-02-10 02:52:25
 */
import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="" height="531"/>
            </div>
            <div className="right-content">
                <h4>I am <span>Ayush Ranjan</span></h4>
                <p className="paragraph">
                    I am an ambitious, hardworking individual, with decent skills in Front-end Web Development,
                    Sales Management and Business Consulting
                    I am adept at managing multiple tasks on a daily basis competently and at working well under pressure.
                    Having a key strength in building strong relationships with people in order to produce the best results.

                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        {/* <p>Service</p> */}
                    </div>
                    <div className="info">
                        <p>: Ayush Ranjan</p>
                        <p>: 22</p>
                        <p>: Indian </p>
                        <p>: Hindi, English </p>
                        <p>: Ranchi, Jharkhand</p>
                        {/* <p>: Freelance</p> */}
                    </div>
                </div>
                <a href='https://drive.google.com/file/d/1w7XOkSaTCcy2YNpE9m1ukZqnNwTYRrlp/view?usp=sharing' ><PrimaryButton title={'View Cv'} /></a>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
