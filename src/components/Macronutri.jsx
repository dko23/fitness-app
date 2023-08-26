import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { CircularProgress } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'


function Macronutri() {
    const [goal, setGoal] = useState('');
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');
    const [activity, setActivity] = useState('');
    const [nutrient, setNutrient] = useState({})
    const [isLoading, setIsLoading] = useState(false);



    const onGoalChanged = e => setGoal(e.target.value)
    const onWeightChanged = e => setWeight(e.target.value)
    const onHeightChanged = e => setHeight(e.target.value)
    const onAgeChanged = e => setAge(e.target.value)
    const onGenderChanged = e => setGender(e.target.value)
    const onActivityChanged = e => setActivity(e.target.value)


    
const macroKey = process.env.REACT_APP_MACRO_KEY;

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true); // Set loading to true before making the API request
        const options = {

            method: 'POST',
            url: 'https://gym-calculations.p.rapidapi.com/calculate-macronutrient-ratios',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': macroKey,
                'X-RapidAPI-Host': 'gym-calculations.p.rapidapi.com'
            },
            data: {
                goal: goal,
                weight: weight,
                height: height,
                age: age,
                gender: gender,
                activity_level: activity,
            }
        };

        try {
            const response = await axios.request(options);
            setNutrient(response.data.result)


        } catch (error) {
            console.error(error);
        }
        finally {
            setIsLoading(false); // Stop loading
        }
    }
    return (
        <div>
            <Card align='center' className='bmi'>
                <CardHeader>
                <h5>Check out your personalized macronutrient recommendations based on your goals</h5>
                </CardHeader>
                <CardBody>
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <label>Goal</label>
                            <Select placeholder='Select option' value={goal} type='string' onChange={onGoalChanged}>
                                <option value="maintain">maintain</option>
                                <option value='lose'>lose</option>
                                <option value="gain">gain</option>
                            </Select>
                        </div>
                        <div>
                            <label>Weight(kg)</label>
                            <Input placeholder='Weight' value={weight} type='text' onChange={onWeightChanged} />
                        </div>

                        <div>
                            <label>Height(M)</label>
                            <Input placeholder='height' value={height} type='number' onChange={onHeightChanged} />
                        </div>
                        <div>
                            <label>Age</label>
                            <Input placeholder='age' value={age} type='integer' onChange={onAgeChanged} />
                        </div>
                        <div>
                            <label>Gender</label>
                            <Input placeholder='gender' value={gender} type='string' onChange={onGenderChanged} />
                        </div>
                        <div>
                            <label>Activity Level</label>
                            <Select placeholder='Select option' value={activity} onChange={onActivityChanged}>
                                <option value="sedentary">sedentary</option>
                                <option value='activity'>activity</option>
                                <option value="lightly_active">lightly_active</option>
                                <option value="very_active">very_active</option>
                                <option value="super_active">super_active</option>
                            </Select>

                        </div>


                        <Button colorScheme='teal' size='md' type='submit'>
                            Submit
                        </Button>
                    </form>
                </CardBody>
                <CardFooter>
                    <div>
                        {isLoading ? (
                            <CircularProgress isIndeterminate color='green.300' />
                        ) : (
                            <div>
                                <p>Protein: {nutrient.protein}</p>
                                <p>Fat: {nutrient.fat}</p>
                                <p>Carbs: {nutrient.carbs}</p>
                                <p>Calories: {nutrient.calories}</p>
                            </div>
                        )}
                    </div>
                </CardFooter>
            </Card>

        </div>
    )
}

export default Macronutri




