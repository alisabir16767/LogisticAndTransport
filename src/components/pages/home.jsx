import React, { Component } from 'react';
import Slide from '../utils/slide';
import CountingUp from '../utils/countingUp';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="slide-container">
                
                <Slide />

               <CountingUp/>                
             <div className="container">
                <div className='HomeAboutUs'>
                    <h3>About Us</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates esse accusamus earum veritatis, sapiente, minus corporis soluta commodi quasi temporibus illo saepe praesentium recusandae cupiditate sunt excepturi eos. Officia, ab?
                    Minus modi fuga nesciunt dolor voluptas ea vero hic fugiat eveniet, nam aspernatur alias inventore enim cumque reprehenderit. Sint enim, aliquid eos tempora facere placeat provident nobis? Molestias, enim quae?</p>
                </div>
                <div className='HomeAboutUs'>
                    <h3>Projects Executed State</h3>
                    <img src="https://www.mapsofindia.com/maps/india/india-outline-map.jpg" alt="map" className='object fit cover' />
                </div>
             </div>


            </div>
        );
    }
}

export default Home;
