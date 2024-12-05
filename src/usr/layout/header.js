import * as React from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"

const HeaderSection = ({ siteTitle }) => (
  <Header>
    <Container>
      <div className="d-sm-flex align-items-center text-center">
        <div className="text-start ms-3">
          <img src="https://db.lad-sapienza.it/narenj/assets/5183a061-2f31-4929-b86b-0cbeda06d1ff?fit=cover&width=1500&height=350&quality=50" className="img-fluid"/>
          <h1>Pre-Islamic Afghanistan</h1>
          <p className="lead">Archaeology and cultural heritage of pre-Islamic Afghanistan: Sites and materials. With a focus on the Buddhist clay sculptures</p>
        </div>
      </div>
    </Container>
  </Header>
)

const Header = styled.header`
  background-color: #ebebeb;
  margin-bottom: 5rem;

  .gatsby-image-wrapper {
    background-color: #ffffff;
    img {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`

export default HeaderSection
