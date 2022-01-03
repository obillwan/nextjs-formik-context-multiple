import React, {useEffect, useContext, useReducer} from 'react'
import { BirdContext } from '../../state/context';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
// import { useDispatch, useSelector } from 'react-redux';
import { addBird, addBirdSize } from '../../store/actions/birdAction2';
// import { RootState } from '../../store/store';

function FormikContainer () {
  const { state, dispatch } = useContext(BirdContext);
  // const dispatch = useDispatch();
  // const selectedBirdName= useSelector((state: RootState)=> state.testBirds2);
  // const { name2, size, views } = state selectedBirdName;

  function handleBirdSelection(setFieldValue: (field: string, value: any, shouldValidate: boolean) => void ) {
    setFieldValue('selectOption', state.name2, false);
  }

  function handleBirdSizeSelection(setFieldValue: (field: string, value: any, shouldValidate: boolean) => void ) {
    setFieldValue('selectBirdSizeOption', state.size, false);
  }

  const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Bluejay', value: 'bluejay' },
    { key: 'Robin', value: 'robin' },
    { key: 'Sparrow', value: 'sparrow' }
  ]

  const dropdownBirdSizeOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Small', value: 'small' },
    { key: 'Medium', value: 'medium' },
    { key: 'Large', value: 'large' }
  ]

  const initialValues = {
    selectOption: '',
    selectBirdSizeOption: ''
  }
  const validationSchema = Yup.object({
    selectOption: Yup.string().required('Required'),
    selectBirdSizeOption: Yup.string().required('Required'),
  })
  const onSubmit = (values: { selectOption: any; selectBirdSizeOption: any; }) => {
    dispatch(addBird(values.selectOption));
    dispatch(addBirdSize(values.selectBirdSizeOption));
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({values, errors, setFieldValue}) => (
        <Form>
            {
              useEffect(() => {
                if(state.name2){
                  handleBirdSelection(setFieldValue);
                }
              }, [state.name2])
            }
            {
              useEffect(() => {
                if(state.size){
                  handleBirdSizeSelection(setFieldValue);
                }
              }, [state.size])
            }
            <br/>
          <FormikControl
            control='select'
            label='Select a bird'
            name='selectOption'
            options={dropdownOptions}
          />
            <br/>
          <FormikControl
            control='select'
            label='Select a bird size'
            name='selectBirdSizeOption'
            options={dropdownBirdSizeOptions}
          />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer
