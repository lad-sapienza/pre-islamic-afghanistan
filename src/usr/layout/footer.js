import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container } from "react-bootstrap"

const FooterSection = () => {
  return (
    <Footer>
      <Container>
        <div className="d-flex flex-row align-items-center mb-3">
          <div className="p-3">
            Powered by
            <br />
            <a
              href="https://github.com/lab-archeologia-digitale/sCMS/"
              title="s:CMS a research data oriented CMS build by LAD"
            >
              <StaticImage
                src="../../images/scms-lad.png"
                width={100}
                quality={80}
                formats={["AUTO", "WEBP"]}
                alt="LAD: Laboratorio di Archeologia Digitale alla Sapienza"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="p-3 border-start border-primary">
            <p className="p-s-3">
              Build with ♥ by{" "}
              <a
                href="https://lad.saras.uniroma1.it"
                target="_blank"
                rel="noreferrer"
              >
                LAD: Laboratorio di Archeologia Digitale alla Sapienza
              </a>
            </p>
            <hr />
            <p>
              Copyright and credits: 2024{" "}
              {new Date().getFullYear() > 2024 &&
                `- ${new Date().getFullYear()}`}{" "}
              Italian Archaeological Mission in Afghanistan
            </p>
            <p>
              Contact: <a href="mailto:afiligenzi@unior.it">afiligenzi@unior.it</a>
            </p>
          </div>
        </div>
      </Container>
    </Footer>
  )
}

//style
const Footer = styled.footer`
  background-color: #ececec;
  border-top: #000 solid 0.5rem;
  min-height: auto;
  margin-top: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

export default FooterSection
