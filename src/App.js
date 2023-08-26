
import './App.css';
import BMI from './components/BMI';
import Macronutri from './components/Macronutri';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import PostProgress from './components/PostProgress';
import ProgressList from './components/ProgressList';
import ProgressChart from './components/ProgressChart';
import WorkoutPlan from './components/WorkoutPlan';
import Fit from './components/Fit';
import Navbar from './components/Navbar';
import { BrowserRouter as AppRouter, Routes, Route, Link } from 'react-router-dom'
import Dash from './components/Dash';
import Start from './components/Start';






function App() {
  return (
    <ChakraProvider>
      <div className="App">  
      <AppRouter>
<Navbar />
  <Routes>
            <Route path="/" element={<Fit />} />
            <Route path="Dash" element={<Dash />} />
            <Route path="Get-Started" element={<Start/>} />
  </Routes>
<hr></hr>
</AppRouter> 
    
    </div>
    </ChakraProvider>
  );
}

export default App;





// {/* <div className="col-md-6 ">
// <PostProgress/>
// {/* <Macronutri /> */}
// {/* <WorkoutPlan/> */}
// </div>
// <div className="col-md-6 ">
// {/* <BMI /> */}
// <ProgressList />
// <ProgressChart/>
// </div>
//  */}


