import React from "react"
import styled from "styled-components"
import paperstack from "../images/paperstack.png"

const Heroes = styled.section`
  background-color: ${props => props.theme.colors.main};
  margin-bottom: 2.4rem;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding-top: 80px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 4rem;
  }

  img {
    margin-right: 0;

    @media (min-width: 768px) {
      margin-right: 4rem;
    }
  }

  h1 {
    font-size: 34px;
    line-height: 1.4;
  }
`

const Hero = () => {
  return (
    <Heroes>
      {" "}
      <img src={paperstack} alt="" />
      <h1>
        Gör det du är bra på <br></br>lämna ekonomijobbet till oss!
      </h1>
    </Heroes>
  )
}

export default Hero
