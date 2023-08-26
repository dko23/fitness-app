import React from 'react';
import PostProgress from './PostProgress';
import ProgressList from './ProgressList';
import ProgressChart from './ProgressChart';

function Dash() {
  return (
    <div>
      <>
        <div className='container'>
          <div className='row '>
            <div className='col-md-6 '>
              <ProgressChart />
            </div>
            <div className='col-md-6 dash'>
              <PostProgress />
            </div>
          </div>
        </div>
        <div className='row-list'>
          <div className=''>
            <ProgressList />
          </div>
        </div>
      </>
    </div>
  );
}

export default Dash;
