import React from 'react'
import { Form, Button } from 'react-bootstrap'

const ReviewForm = ({handleSubmit,revText,labelText,defaultValue}) => {
  return (
    <Form>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label></Form.Label>
            <Form.Group ref = {revText} as="textarea" rows={3} defaultValue={defaultValue}/>

        </Form.Group>
        <Button variant='outline-info' onClick={handleSubmit}>Submit</Button>

    </Form>
  )
}

export default ReviewForm