import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Form from "./form"
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog"
import "@reach/dialog/styles.css"

const Headers = styled.header`
  margin-bottom: 1.45rem;
  position: fixed;
  width: 100%;

  background-color: white;

  button {
    background-color: ${props => props.theme.colors.main};
    padding: 6px 20px;
    color: white;
    border: none;
    border-radius: 6px;
    transition: all 150ms ease-in;

    &:hover {
      background-color: ${props => props.theme.colors.mainHover};
    }

    &:focus {
      outline: none;
    }
  }

  a {
    color: ${props => props.theme.colors.main};
    text-decoration: none;
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

const Header = ({ siteTitle }) => {
  const [showDialog, setShowDialog] = React.useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  return (
    <Headers>
      <div className="container">
        <Link to="/">{siteTitle}</Link>
        <button onClick={open}>Kontakta oss</button>
        <Dialog isOpen={showDialog} onDismiss={close}>
          <Form></Form>
          <button onClick={close}>X</button>
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
