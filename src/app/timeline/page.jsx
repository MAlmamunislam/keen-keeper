'use client';
import React, { useContext } from 'react';
import { MyContext } from '../layout';

const TimeLine = () => {
     const {friendData} = useContext(MyContext);
     console.log("friendData in TimeLine: ", friendData);

     
     return (
          <div>
               <h2>Time Line</h2>
          </div>
     );
};

export default TimeLine;