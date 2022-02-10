/**
 * @Author: Ayush Ranjan
 * @Date:   2022-02-08 23:20:54
 * @Last Modified by:   Ayush Ranjan
 * @Last Modified time: 2022-02-10 00:52:15
 */
import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'Material UI'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'75%'}
                            text={'75%'}
                        />
                        <ProgressBar 
                            title={'JAVA'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'Figma'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'GITHUB'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'SVN'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'MS Office'}
                            width={'85%'}
                            text={'85%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
