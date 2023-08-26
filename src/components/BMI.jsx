import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { CircularProgress } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'


function BMI() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmiResult, setBmiResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false);

  const onWeightChanged = e => setWeight(e.target.value)
  const onHeightChanged = e => setHeight(e.target.value)
  const BmiKey = process.env.REACT_APP_BMI_KEY;



  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Set loading to true before making the API request
    const options = {
      method: 'POST',
      url: 'https://gym-calculations.p.rapidapi.com/bmi',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': BmiKey,
        'X-RapidAPI-Host': 'gym-calculations.p.rapidapi.com'
      },
      data: {
        weight: weight,
        height: height
      }
    };

    try {
      const response = await axios.request(options);
      setBmiResult(response.data.result);
    } catch (error) {
      console.error(error);
    }
    finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <>
     
        <Card align='center' className='bmi'>
          <CardHeader>
          <h5>What's your BMI?</h5>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label>Weight(kg)</label>
                <Input placeholder='Weight' value={weight} type='text' onChange={onWeightChanged} />
              </div>
              <div>
                <label>Height(M)</label>
                <Input placeholder='Weight' value={height} type='text' onChange={onHeightChanged} />
              </div>

              <Button colorScheme='teal' size='md' type='submit'>
                Check
              </Button>
            </form>
          </CardBody>
          <CardFooter>


            <div>

              {isLoading ? (
                <CircularProgress isIndeterminate color='green.300' />
              ) : (
                <div>
                  {bmiResult !== null && (
                    <p>
                      Your BMI: {bmiResult}
                      {bmiResult < 18.5
                        ? " - Underweight"
                        : bmiResult > 18 && bmiResult < 24.9
                          ? " - Normal Weight"
                          : bmiResult > 25 && bmiResult < 29.9
                            ? " - Overweight"
                            : ""}
                    </p>
                  )}
                </div>
              )}
            </div>
          </CardFooter>
        </Card>




      </>
    </div>
  )
}

export default BMI









