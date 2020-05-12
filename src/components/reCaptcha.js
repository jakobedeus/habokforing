import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3"
import React from "react"
import styled from "styled-components"

const StyledButton = styled.button``

const CaptchaButton = ({ onVerifyCaptcha }) => {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const clickHandler = async () => {
    if (!executeRecaptcha) {
      return
    }

    const token = await executeRecaptcha("contact")

    onVerifyCaptcha(token)
  }

  return (
    <StyledButton onClick={clickHandler}>
      Please validate you are a human.
    </StyledButton>
  )
}

export const ReCaptcha = ({ onVerifyCaptcha }) => (
  <GoogleReCaptchaProvider
    reCaptchaKey="6LddSvYUAAAAACDnWRFOXeSLeitAC9tF7P5Vh1Fw
  "
  >
    <CaptchaButton onVerifyCaptcha={onVerifyCaptcha} />
  </GoogleReCaptchaProvider>
)
