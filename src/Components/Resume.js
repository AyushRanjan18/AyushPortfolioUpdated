/**
 * @Author: Ayush Ranjan
 * @Date:   2022-02-08 23:20:54
 * @Last Modified by:   Ayush Ranjan
 * @Last Modified time: 2022-02-10 01:09:13
 */
import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'June 2021 - Present'} 
                        title={'React Developer Intern'}
                        subTitle={'OpsVeda Asia Pvt Lmt'}
                        text={'Application Development using React JS, Redux JS, Vanila JavaScript and Amcharts. Unit Testing and Code review. '} 
                    />
                    <ResumeItem 
                        year={'Jan 2021 - June 2021'} 
                        title={'Consultant Intern'}
                        subTitle={'Highradius Corporation'}
                        text={'Solving business cases, achieved proficiency in MS Office Especially in Excel. Proficiency in handling business operations like Guesstimation, Work prioritization and management etc. '} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2018 - Present'} 
                        title={'Bachelor of Technology in Information Technology'}
                        subTitle={'Kalinga Institute of Industrial Technology, Bhubaneswar'}
                        text={'CGPA - 9.19'} 
                    />
                    <ResumeItem 
                        year={'2017 - 2018'} 
                        title={'All India Senior Secondary Certificate Examination'}
                        subTitle={'Sri Chaitanya Educational Institution, Visakhapatnam, Andhra Pradesh'}
                        text={'Percentage - 88.7%'} 
                    />
                    <ResumeItem 
                        year={'2015 - 2016'} 
                        title={'All India Secondary Certificate Examination'}
                        subTitle={'DAV Public School, Hehal , Ranchi, Jharkhand'}
                        text={'CGPA - 10'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
