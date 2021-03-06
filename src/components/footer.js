import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Footers = styled.footer`
  background-color: #111f2e;
  margin-top: 4rem;

  .container {
    display: block;

    @media (min-width: 768px) {
      align-items: center;
      display: flex;
    }
  }

  ul {
    color: white;
    text-decoration: none;
    list-style: none;
    flex: 1;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    margin: 0;

    @media (min-width: 768px) {
      padding: 0;
    }

    li {
      margin-bottom: 0;
    }
  }

  iframe {
    flex: 1;
    margin: 0;
  }
`

const Footer = () => (
  <Footers>
    <div className="container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8128.67392021713!2d18.0072936!3d59.3802157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5b25c67f82d58ad8!2sH%20Andersson%20Bokf%C3%B6ringsbyr%C3%A5!5e0!3m2!1ssv!2sse!4v1588338745458!5m2!1ssv!2sse"
        width="100%"
        height="400"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
      <ul>
        <li>
          <p> H Andersson Bokföringsbyrå AB</p>
        </li>
        <li>
          <p> Telefon: 08-544 900 06</p>
        </li>
        <li>
          <p> Besöksadress:</p>
        </li>
        <li>
          <p> Vallgatan 5B 3tr</p>
        </li>
        <li>
          <p> 170 67 Solna</p>
        </li>
      </ul>
    </div>
  </Footers>
)

export default Footer
