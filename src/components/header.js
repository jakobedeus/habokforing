import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Form from "./form"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  faPhone,
  faMailBulk,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"

const StyledLink = styled(Link)`
  font-size: 1.4em;
`

const Headers = styled.header`
  margin-bottom: 1.45rem;
  position: fixed;
  width: 100%;
  z-index: 1;
  filter: drop-shadow(0 0 10px gray);
  background-color: white;

  a {
    color: ${props => props.theme.colors.main};
    text-decoration: none;
    font-weight: bold;
    display: flex;
    align-items: center;

    p {
      margin: 0;
    }

    svg {
      margin-right: 6px;
    }
  }

  .container {
    margin: 0 auto;
    max-width: 960px;
    align-items: center;
    display: flex;
    height: 80px;
    justify-content: space-between;
  }
`

const HeaderActions = styled.div`
  display: flex;
  align-items: center;

  button {
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 4px;
    margin: 0 6px;
    background-color: ${props => props.theme.colors.main};
    color: white;
    border: none;
    border-radius: 50%;
    transition: all 150ms ease-in;

    &:hover {
      background-color: ${props => props.theme.colors.mainHover};
    }

    &:focus {
      outline: none;
    }

    a {
      padding: 0;
      display: flex;
      justify-content: center;
    }

    svg {
      margin: 0;
      path {
        fill: white;
      }
    }
  }
`

const Header = ({ siteTitle }) => {
  const [showDialog, setShowDialog] = React.useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  return (
    <Headers>
      <div className="container">
        <StyledLink to="/">{siteTitle}</StyledLink>
        <HeaderActions>
          <button>
            <a href="tel:+0854490006">
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </button>
          <button onClick={open}>
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
        </HeaderActions>
        {/* <button onClick={open}>Kontakta oss</button> */}
        <Dialog aria-label="Kontakta oss" isOpen={showDialog} onDismiss={close}>
          <Form></Form>
        </Dialog>
      </div>
    </Headers>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
