import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Section>
        <hr />
        <Container>
          <FooterBrand style={{ marginTop: "16px" }}>
            <img src="https://i.postimg.cc/CxTS5Pcw/pngwing-com-2.png" alt="" />
          </FooterBrand>
          <Nav style={{ color: "#fff" }}>
            <li>
              <p>English</p>
            </li>
            <li>
              <p>Subscriber Agreement</p>
            </li>
            <li>
              <p>Privacy Policy</p>
            </li>
            <li>
              <p>Your California Privacy</p>
            </li>
            <li>
              <p>Do Not Sell My Info</p>
            </li>
            <li>
              <p>Children's Online Privacy Policy</p>
            </li>
            <li>
              <p>Closed Captioning</p>
            </li>
            <li>
              <p>Interest-Based-Ads</p>
            </li>
            <li>
              <p>Supported Devices</p>
            </li>
            <li>
              <p>Help</p>
            </li>
            <li>
              <p>Gift</p>
            </li>
            <li>
              <p>About US</p>
            </li>
            <li>
              <p>Partner Program</p>
            </li>
            <li>
              <p>Premier Access</p>
            </li>
            <li>
              <p>The Bundle</p>
            </li>
          </Nav>
          <CopyRight>
            <p style={{ color: "#fff" }}>© Netflix. All Rights Reserved</p>
          </CopyRight>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.section`
  padding: 2rem;
  margin-bottom: 0;

  @media screen and (max-width: 500px) {
    padding: 1rem;
  }
`;

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const FooterBrand = styled.div`
  text-align: center;

  img {
    width: 10rem;
    height: auto;
    object-fit: fill;

    @media screen and (max-width: 500px) {
      width: 7rem;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: 0;
  flex-grow: initial;
  justify-content: center;

  li {
    list-style: none;

    p {
      padding: 0.5rem;
      font-size: 0.9rem;
      margin-right: 0.3rem;
      color: white;
      @media screen and (max-width: 500px) {
        font-size: 0.75rem;
        padding: 0.1rem;
      }
    }
  }
`;

const CopyRight = styled.div`
  text-align: center;

  p {
    margin-top: 1vh;
    font-weight: 400 !important;

    @media screen and (max-width: 500px) {
      font-size: 0.95rem;
    }
  }
`;

export default Footer;
