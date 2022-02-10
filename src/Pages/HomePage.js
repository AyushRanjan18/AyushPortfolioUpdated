/**
 * @Author: Ayush Ranjan
 * @Date:   2022-02-08 23:20:54
 * @Last Modified by:   Ayush Ranjan
 * @Last Modified time: 2022-02-10 02:50:13
 */
import React from 'react'
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import Particle from '../Components/Particle';
function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Ayush Ranjan</span></h1>
                <p>
                    I am an ambitious, hardworking individual, with decent skills in Front-end Web Development,
                    Sales Management and Business Consulting
                    I am adept at managing multiple tasks on a daily basis competently and at working well under pressure.
                    Having a key strength in building strong relationships with people in order to produce the best results.
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/ayush-ranjan-a0201517b/" className="icon i-facebook">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/AyushRanjan18" className="icon i-github">
                        <GithubIcon />
                    </a>
                    
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
