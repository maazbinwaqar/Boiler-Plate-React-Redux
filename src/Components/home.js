import React, { Component } from 'react';
import Nav from './nav'

class Home extends Component {

    render() {
        return (
            <div className='container-fluid'>
                <Nav className='mb-5'/>

                <div className='text-center ml-auto mr-auto pt-5 mt-5 col-4 p-0'>
                    <h1 className='display-3 pt-5 font-weight-light text-muted'>Home Page</h1>
                    <p className='p text-secondary'>Click on Nav elements to start</p>
                </div>
            </div>
        )
    }
}

export default Home;