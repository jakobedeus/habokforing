import React from "react"
import styled from "styled-components"
import { Accordions, Accordion } from "./Accordion"

const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const InfoItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.4rem;
`

const Info = () => {
  return (
    <div className="container">
      <h3>Vi hjälper dig med</h3>
      <Accordions>
        <Accordion id={0} title={"Löpande bokföring"}>
          <p>
            Månadsavstämningar, balans- och resultaträkningar och
            momsdeklarationer.
          </p>
        </Accordion>
        <Accordion id={1} title={"Löneadministration"}>
          <p>
            Löneberäkningar efter underlag, lönespecifikationer samt
            kontrolluppgifter, skattedeklarationer.
          </p>
        </Accordion>
        <Accordion id={2} title={"Utbetalningar"}>
          <p>
            Betalning av leverantörsfakturor, löner och betalning till
            Skatteverket.
          </p>
        </Accordion>
        <Accordion id={3} title={"Årsredovisning och årsbokslut"}>
          <p>Med årsboksbilagor och protokoll.</p>
        </Accordion>
        <Accordion id={4} title={"Fakturering"}>
          <p>Med årsboksbilagor och protokoll.</p>
        </Accordion>
        <Accordion
          id={5}
          title={"Inkomstdeklarationer, både bolagets och din privata"}
        >
          <p>Efter bokslut så gör vi deklarationer till Skatteverket.</p>
        </Accordion>
        <Accordion id={6} title={"Skatterådgivning"}>
          <p>Vi håller koll på de senaste uppdateringarna av skattereglerna.</p>
        </Accordion>
        <Accordion id={7} title={"Starta bolag"}>
          <p>
            Vi hjälper er med alla handlingar till Bolagsverket och
            Skatteverket. Vi kan även hjälpa till med likviditetsplanering och
            budget.
          </p>
        </Accordion>
      </Accordions>
    </div>
  )
}

export default Info
