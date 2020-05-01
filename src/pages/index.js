import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Helen from "../images/helen.jpg"
import Katarina from "../images/katarina.jpg"
import Malgorzata from "../images/malgorzata.jpg"
import styled from "styled-components"
import Info from "../components/Info"
import Form from "../components/form"

const Employees = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0;
`

const EmployeeCard = styled.div`
  margin: 0 10px;

  h3 {
    padding: 10px;
  }

  img {
    margin: 0;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <p>Gör det du är bra på - lämna ekonomijobbet till oss!</p>
    </Hero>

    <Employees>
      <EmployeeCard>
        <img src={Helen} alt="" />
        <h3>Helen</h3>
      </EmployeeCard>
      <EmployeeCard>
        <img src={Katarina} alt="" />
        <h3>Katarina</h3>
      </EmployeeCard>

      <EmployeeCard>
        <img src={Malgorzata} alt="" />
        <h3>Malgorzata</h3>
      </EmployeeCard>
    </Employees>
    <Info />
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8128.67392021713!2d18.0072936!3d59.3802157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5b25c67f82d58ad8!2sH%20Andersson%20Bokf%C3%B6ringsbyr%C3%A5!5e0!3m2!1ssv!2sse!4v1588338745458!5m2!1ssv!2sse"
      width="100%"
      height="400"
      frameborder="0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Layout>
)

export default IndexPage
