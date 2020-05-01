import React from "react"
import styled from "styled-components"

const Heroes = styled.section`
  background-color: ${props => props.theme.colors.main};
  margin-bottom: 1.45rem;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding-top: 80px;
`

const Hero = ({ children }) => {
  return <Heroes>{children}</Heroes>
}

export default Hero
