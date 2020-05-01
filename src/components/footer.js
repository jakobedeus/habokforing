import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Footers = styled.footer`
  text-align: center;
  height: 400px;

  background-color: ${props => props.theme.colors.mainHover};
  a {
    color: white;
    text-decoration: none;
  }

  .container {
    padding: 1rem 0;
    margin: 0 auto;
    max-width: 960px;
  }
`

const Footer = () => (
  <Footers>
    <div className="container">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </Footers>
)

export default Footer
