import React from 'react';
import './about.css'

const About = () => {
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <h1>About Page</h1>
            <iframe id='vid' width="917" height="516" src="https://www.youtube.com/embed/dlWY07IZvQ4"
                    title="Rex Orange County - What About Me (Television / So Far So Good) (Lyrics)" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
    );
};

export default About;