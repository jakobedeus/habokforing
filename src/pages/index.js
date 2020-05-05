import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Helen from "../images/helen.jpg"
import Katarina from "../images/katarina.jpg"
import Malgorzata from "../images/malgorzata.jpg"
import styled from "styled-components"
import Info from "../components/Info"

const Employees = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0 4rem 0;
`

const EmployeeCard = styled.div`
  margin: 0 10px;

  h3 {
    margin: 4px 0 6px 0;
  }

  p {
    margin: 0;
  }

  img {
    margin: 0;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <div className="container">
      <h3>Vi som jobbar här</h3>
      <Employees>
        <EmployeeCard>
          <img src={Helen} alt="" />
          <h3>Helen</h3>
          <p>Redovisningskonsult och ägare</p>
        </EmployeeCard>
        <EmployeeCard>
          <img src={Katarina} alt="" />
          <h3>Katarina</h3>
          <p>Redovisningsassistent</p>
        </EmployeeCard>

        <EmployeeCard>
          <img src={Malgorzata} alt="" />
          <h3>Malgorzata</h3>
          <p>Redovisningsassistent</p>
        </EmployeeCard>
      </Employees>
    </div>
    <Info />

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Layout>
)

export default IndexPage
