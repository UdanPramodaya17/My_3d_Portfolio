import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} alt="arrow icon" className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I'm <span className='font-semibold'>D.S Udana Pramodaya</span> ✌️
            <br />
           A Full Stack Software Developer focused on creating efficient and scalable solutions..
        </h1>
    ),

    2: (
        <InfoBox
            text="Driven to learn, adapt, and deliver my best in every opportunity I get."
            link="/about"
            btnText="Learn More"
        />
    ),

    3: (
        <InfoBox 
            text="Actively building projects to sharpen my skills and gain hands-on experience. Want to see my work?"
            link="/projects" 
            btnText="Visit my portfolio"
        />
    ),

    4: (
        <InfoBox 
            text="Looking for a driven developer to join your team? Let's connect."
            link="/contact"
            btnText="Let's talk"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo