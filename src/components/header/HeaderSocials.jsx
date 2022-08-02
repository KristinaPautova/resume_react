import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/kristina-pautova/" ><BsLinkedin/></a>
            <a href="https://github.com/KristinaPautova" ><FaGithub/></a>
            <a href="https://www.linkedin.com/in/kristina-pautova/" ><FiDribbble/></a>
        </div>
    );
};

export default HeaderSocials;