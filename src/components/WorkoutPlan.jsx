import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { CircularProgress } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

function WorkoutPlan() {
    const [time, setTime] = useState(0);
    const [muscle, setMuscle] = useState("");
    const [location, setLocation] = useState("");
    const [equipment, setEquipment] = useState(0);
    const [work, setWork] = useState({});
    const [isLoading, setIsLoading] = useState(false);



    const onTimeChanged = e => setTime(e.target.value)
    const onMuscleChanged = e => setMuscle(e.target.value)
    const onLocationChanged = e => setLocation(e.target.value)
    const onEquipmentChanged = e => setEquipment(e.target.value)

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true); // Set loading to true before making the API request
        const options = {
            method: 'GET',
            url: 'https://workout-planner1.p.rapidapi.com/',
            params: {
              time: '80',
              muscle: 'legs',
              location: 'hills',
              equipment: 'running shoes'
            },
            headers: {
              'X-RapidAPI-Key': '9eb023ebcamshe927391a0768dbep18e7eejsnfdab813bb5f1',
              'X-RapidAPI-Host': 'workout-planner1.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
              setWork(response.data.result)
          } catch (error) {
              console.error(error);
          }  finally {
            setIsLoading(false); // Stop loading
        }
    }

  return (
    <div> <Card align='center' className='bmi'>
    <CardHeader>

    </CardHeader>
    <CardBody>
        <form onSubmit={handleFormSubmit}>
           
            <div>
                <label>Time</label>
                <Input placeholder='Time' value={time} type='number' onChange={onTimeChanged} />
            </div>

            <div>
                <label>Muscle</label>
                <Input placeholder='muscle' value={muscle} type='text' onChange={onMuscleChanged} />
            </div>
            <div>
                <label>Location</label>
                <Input placeholder='location' value={location} type='integer' onChange={onLocationChanged} />
            </div>
            <div>
                <label>equipment</label>
                <Input placeholder='equipment' value={equipment} type='string' onChange={onEquipmentChanged} />
            </div>

            <Button colorScheme='teal' size='md' type='submit'>
                Submit
            </Button>
        </form>
    </CardBody>
    <CardFooter>
        {/* <div>
            {isLoading ? (
                <CircularProgress isIndeterminate color='green.300' />
            ) : (
                <div>
                    <p>{work.Exercise}</p>
                    
                </div>
            )}
        </div> */}
    </CardFooter>
</Card></div>
  )
}

export default WorkoutPlan






