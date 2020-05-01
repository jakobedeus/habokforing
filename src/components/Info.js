import React from "react"
import styled from "styled-components"

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
      <InfoList>
        <InfoItem>
          <h4>Hej</h4>
          <p>Loremalkjsdlkasjdlaksjdlkasjdlkasjd</p>
        </InfoItem>
        <InfoItem>
          <h4>Hej</h4>
          <p>Loremalkjsdlkasjdlaksjdlkasjdlkasjd</p>
        </InfoItem>
        <InfoItem>
          <h4>Hej</h4>
          <p>Loremalkjsdlkasjdlaksjdlkasjdlkasjd</p>
        </InfoItem>
        <InfoItem>
          <h4>Hej</h4>
          <p>Loremalkjsdlkasjdlaksjdlkasjdlkasjd</p>
        </InfoItem>
      </InfoList>
    </div>
  )
}

export default Info
