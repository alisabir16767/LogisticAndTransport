import React, { Component } from 'react';
import Slide from '../utils/slide';
import CountingUp from '../utils/countingUp';
import './home.css';
import AboutUsHome from '../utils/aboutUsHome';

class Home extends Component {
    render() {
        return (
            <div className="slide-container">
                
                <Slide />

                <CountingUp />
               <AboutUsHome/>
               <h1 className='text-center'>Our Mission</h1>
               <div className='OurMission'>
              
                <div className="OurMissionChild"></div>
                <div className="OurMissionChild"></div>
               
               </div>

               <div className='OurJourney'>
                <h1 className='text-center'>Our Journey</h1>

                </div>
                <div className="MatchWining">
                    <div className='MatchWiningChild'>

                    </div>
                    <div className='MatchWiningChild'>
                        <h1>Few of Our Match Wining Achievment</h1>
                    </div>
                </div>

                <div className="HomeOurClient">
                    <h1 className='text-center'>Our Clients</h1>
                </div>
          
               
            </div>
        );
    }
}

export default Home;
