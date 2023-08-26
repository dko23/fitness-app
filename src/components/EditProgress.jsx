import React from 'react'
import { useState } from 'react';
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { editProgress } from '../features/Slice';

function EditProgress({ prefill, closeModal }) {
    const [state, setState] = useState({
        id: prefill.id,
        week: prefill.week,
        kg:prefill.kg,
       notes: prefill.notes,
        noteDate: prefill.noteDate
      });
      const dispatch = useDispatch();
    
      const handleChange = (e) => {
        e.preventDefault()
        setState({ ...state, [e.target.name]: e.target.value });
      };
    
      const handleEdit = (e) => {
        e.preventDefault()
        console.log(state)
        dispatch(editProgress(state));
        closeModal();
      };
    
  return (
      <div>
          <form form onSubmit={handleEdit} className='action'>
    <div>
    <Input name='month' placeholder='month' value={state.week} type='text' onChange={handleChange} />

              </div>
              <div>
    <Input name='kg' placeholder='kg' value={state.kg} type='text' onChange={handleChange} />

    </div>
    <div>
        <Input  name='notes'  placeholder='notes' value={state.notes} type='text' onChange={handleChange} />
    </div>
    <div>
        <Input  name='noteDate' placeholder='date' value={state.noteDate} type='date' onChange={handleChange} />
    </div>
    <div>
        <Button colorScheme='teal' size='md' type='submit'>
            Submit
        </Button>
    </div>
</form></div>
  )
}

export default EditProgress