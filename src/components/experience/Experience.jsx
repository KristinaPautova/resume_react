import React from 'react';
import './experience.css'

const Experience = () => {
    return (
        <content id="expertise" className="content_3">
            <sidebar className="content_3__top">
                <span>EXPERIENCE</span>
                <h6>Batman would be jealous.</h6>
            </sidebar>
            <div className="content_3__down">
                <div className="work__table__top">
                    <div className="work__table__group">
                        <h3>01</h3>
                        <h4>ADVANCED CSS</h4>
                        <p>Cras ornare tristique elit lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus
                            id.</p>
                    </div>
                    <div className="work__table__group">
                        <h3>02</h3>
                        <h4>FRONT-END DESIGN</h4>
                        <p>Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel,
                            velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna. Ut aliquam
                            sollicitudin leo.</p>
                    </div>
                    <div className="work__table__group">
                        <h3>03</h3>
                        <h4>RUBY ON RAILS</h4>
                        <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                            Aenean dignissim pellentesque felis. Vivamus vestibulum nulla cras ornare tristique elit nec
                            ante.</p>
                    </div>
                </div>
            </div>
        </content>
    );
};

export default Experience;