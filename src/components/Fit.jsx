
import React from 'react';
import HIIT from '../images/HIIT.jpg';
import Home from './Home'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';


function Fit() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img src={HIIT} className="img-fluid pic" />
          </div>
          <div className='col-md-6'>
            <h2 className="slogan">
              <span className="slogan-text">Empower Your Body, Elevate Your Mind</span>
            </h2>
            <Link to="./Get-Started">  <Button colorScheme='teal' size='md' type='submit'>
                            Get Started
                        </Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fit;

