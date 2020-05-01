import React from "react"
import styled from "styled-components"

const Forms = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.4rem;
`

const Form = () => {
  return (
    <Forms>
      <FormGroup>
        <label>Namn:</label>
        <input type="text" />
      </FormGroup>
      <FormGroup>
        <label>Namn:</label>
        <input type="text" />
      </FormGroup>
      <FormGroup>
        <label>Namn:</label>
        <input type="text" />
      </FormGroup>

      <button>Skicka</button>
    </Forms>
  )
}

export default Form
