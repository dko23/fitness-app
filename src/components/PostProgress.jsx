import React from 'react'
import { useState } from 'react';
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { addProgress } from '../features/Slice';
import { nanoid } from '@reduxjs/toolkit'
import { CheckIcon} from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'



function PostProgress() {

    const [week, setWeek] = useState('');
    const [kg, setKg] = useState(0);
    const [notes, setNotes] = useState('');
    const [noteDate, setNoteDate] = useState('');

    const onMonthChanged = e => setWeek(e.target.value)
    const onKgChanged = e => setKg(e.target.value)
    const onNotesChanged = e => setNotes(e.target.value)
    const onNotesDateChanged = e => setNoteDate(e.target.value)



    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
    }

    const dispatch = useDispatch()


    const saveProgress = () => {
        dispatch(
            addProgress({
                id: nanoid(),
                week,
                kg,
                notes,
                noteDate
            })
        );
    };


    return (
        <div>
              <h3>Hope you are making progress. Let's see</h3>
            <form form onSubmit={handleFormSubmit} className='action progress-form'>
                <div>
                    <Input placeholder='week' value={week} type='text' onChange={onMonthChanged} />
                </div>
                <div>
                    <Input placeholder='kg' value={kg} type='number' onChange={onKgChanged} />
                </div>
                <div>
                    <Input placeholder='notes' value={notes} type='text' onChange={onNotesChanged} />
                </div>
                <div>
                    <Input placeholder='date' value={noteDate} type='date' onChange={onNotesDateChanged} />
                </div>
                <div>
                <IconButton
                        isRound={true}
                        variant='solid'
                        colorScheme='teal'
                        aria-label='Done'
                        fontSize='20px'
                        type='submit'
                        onClick={saveProgress}
                        icon={< CheckIcon />} />
                </div>
            </form>
        </div>
    )
}

export default PostProgress

