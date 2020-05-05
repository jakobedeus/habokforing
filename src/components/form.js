import React, { useEffect } from "react"
import styled from "styled-components"

const Forms = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.8rem;
  position: relative;

  input {
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    padding: 6px 10px;

    &:focus {
      border: 1px solid #bfbfbf;
      outline: none !important;
    }
  }

  label {
    font-family: "Roboto", sans-serif;
    margin-bottom: 4px;
  }

  span {
    color: red;
    position: absolute;
    bottom: -26px;
  }
`
const FormSubmitBtn = styled.button`
  background-color: ${props => props.theme.colors.main};
  color: white;
  opacity: 1;
  height: 50px;
  border-radius: 8px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

// const validEmailRegex = RegExp(
//   /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
// )

const Form = () => {
  const [name, setName] = React.useState("")
  const [company, setCompany] = React.useState("")
  const [orgNr, setOrgNr] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [email, setEmail] = React.useState("")

  const [nameError, setNameError] = React.useState("")
  const [companyError, setCompanyError] = React.useState("")
  const [orgNrError, setOrgNrError] = React.useState("")
  const [phoneError, setPhoneError] = React.useState("")
  const [emailError, setEmailError] = React.useState("")

  const [isDisabled, setDisabled] = React.useState(true)

  const validateName = () => {
    if (name === "") {
      setNameError("Namn måste vara ifyllt")
      return true
    }
    setNameError("")
    return false
  }

  const validateCompany = () => {
    if (company === "") {
      setCompanyError("Företag måste vara ifyllt")
      return true
    }
    setCompanyError("")
    return false
  }

  // useEffect(() => {
  //   setDisabled(!validateName && !validateCompany)
  // }, [name, company])

  return (
    <Forms>
      <FormGroup>
        <label htmlFor="name">Namn:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          onBlur={validateName}
        />
        {nameError && <span>{nameError}</span>}
      </FormGroup>
      <FormGroup>
        <label htmlFor="company">Företag:</label>
        <input
          id="company"
          type="text"
          value={company}
          onChange={e => setCompany(e.target.value)}
          onBlur={validateCompany}
        />
        {companyError && <span>{companyError}</span>}
      </FormGroup>
      <FormGroup>
        <label htmlFor="orgNr">Org nr:</label>
        <input
          id="orgNr"
          type="text"
          value={orgNr}
          onChange={e => setOrgNr(e.target.value)}
        />
        {orgNrError && <span>{orgNrError}</span>}
      </FormGroup>
      <FormGroup>
        <label htmlFor="phone">Telefon:</label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        {phoneError && <span>{phoneError}</span>}
      </FormGroup>
      <FormGroup>
        <label htmlFor="email">E-post:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {emailError && <span>{emailError}</span>}
      </FormGroup>

      <FormSubmitBtn type="submit" disabled={isDisabled}>
        Skicka
      </FormSubmitBtn>
    </Forms>
  )
}

export default Form
