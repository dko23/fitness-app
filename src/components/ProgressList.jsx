import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import EditProgress from './EditProgress'; // Import your EditProgress component
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProgress } from '../features/Slice';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'


function ProgressList() {
  const progress = useSelector((state) => state.progress);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [preFill, setPreFill] = useState(null);

  const handleOpen = (progressItem) => {
    setPreFill(progressItem);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPreFill(null);
  };

  const removeProgress = (id) => {
    dispatch(deleteProgress(id));
  };

  return (
    <div className="container progress-list">
      <Card align='center' className='progress-card'>
        <CardHeader></CardHeader>
        <CardBody>
          {progress.map((progressItem) => (
            <div key={progressItem.id} className="card">
              <div className="card-content">
                <p>Week: {progressItem.week}</p>
                <p>Kilos: {progressItem.kg}</p>
                <p>Goal for this week: {progressItem.notes.substring(0, 100)}</p>
                <p>Date: {progressItem.noteDate}</p>
                <div className='buttons'>
                  <div className='delete-button'>
                    <DeleteIcon boxSize={6} type='submit' onClick={() => removeProgress(progressItem.id)} color="red.500" />
                  </div>
                  <div className='edit-button'>
                    <EditIcon boxSize={6} type='submit' onClick={() => handleOpen(progressItem)} color="blue.900" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardBody>
        <CardFooter></CardFooter>
      </Card>

      <Modal isOpen={open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Progress</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditProgress prefill={preFill} closeModal={handleClose} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ProgressList;
