import * as React from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

const HeaderSection = ({ siteTitle }) => (
  <Header>
    <Container>
      <div className="d-sm-flex align-items-center text-center">
        <div className="text-start ms-3">
          <StaticImage
            src="../images/header-image.jpg"  
            quality={80}
            width={2500}
            formats={["AUTO", "WEBP"]}
            className="img-fluid mb-3"
            alt="Pre-Islamic Afghanistan"
          />
          <h1>Pre-Islamic Afghanistan</h1>
          <p className="lead">
            Archaeology and cultural heritage of pre-Islamic Afghanistan: Sites
            and materials. With a focus on the Buddhist clay sculptures
          </p>
        </div>
      </div>
    </Container>
  </Header>
)

const Header = styled.header`
  background-color: #ebebeb;
  margin-bottom: 5rem;
`

export default HeaderSection
