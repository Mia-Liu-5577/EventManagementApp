import React from 'react'
import { Form, Label } from 'semantic-ui-react';

function TextInput({input, width, type, placeholder, meta: {touched, error}}) {
  return (
    <Form.Field error={touched && !!error} width={width}>
        <input {...input} placeholder={placeholder} width={width} type={type}></input>
        {touched && error && <Label basic color='red'>{error}</Label>}
    </Form.Field>
  )
}

export default TextInput
