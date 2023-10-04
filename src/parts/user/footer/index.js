import React, { useState } from "react";
import LoGo from "../../../assets/LogoPage.png";
import { memo } from "react";
import {
  FooterLink,
  Heading,
  FooterLogo,
  FooterLinkSmall,
  FooterColumn,
  FooterColumnIcon,
  ContainerFooter,
  FooterContainer,
  TransparentBanner,
  ImageFooter,
  FooterBox,
} from "./footerElements";
import { Icon } from '@iconify/react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer() {
  const [width, setWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  if (width <= 736) {
    return (
      <>
        <ImageFooter>
          <TransparentBanner>
            <ContainerFooter>
              <div className="h-40 w-40 mx-auto">
                <img className="block object-fill" src={LoGo} alt="">
                </img>
              </div>

              <div className="flex  w-3/4 mx-auto align-middle justify-left gap-4">

                <div>
                  <Heading>Product</Heading>
                  <FooterLink>Features</FooterLink>
                  <FooterLink>Pricing</FooterLink>
                </div>

                <div className="ml-10">
                  <Heading>Resources</Heading>
                  <FooterLink>Blog</FooterLink>
                  <FooterLink>User guides</FooterLink>
                  <FooterLink>Wen binars</FooterLink>
                </div>
              </div>

              <div className="my-5 mb-10 flex w-3/4 mx-auto align-middle justify-left gap-4">

                <div>
                  <Heading>Community</Heading>
                  <FooterLink>Developers</FooterLink>
                  <FooterLink>User </FooterLink>
                </div>
                <div>
                  <Heading>Company</Heading>
                  <FooterLink>About us</FooterLink>
                  <FooterLink>John us</FooterLink>
                </div>

              </div>

            </ContainerFooter>
          </TransparentBanner>
        </ImageFooter>
      </>
    );
  }
  else {
    return (
      <>
        <FooterBox className="">
          <ImageFooter>
            <TransparentBanner>
              <ContainerFooter>
                <Row >
                  <Col sm={3} >
                    <FooterLogo  alt="" src={LoGo} >
                    </FooterLogo>
                  </Col>
                  <Col>
                    <Heading>Product</Heading>
                    <FooterLink>Features</FooterLink>
                    <FooterLink>Pricing</FooterLink>
                  </Col>
                  <Col>
                    <Heading>Resources</Heading>
                    <FooterLink>Blog</FooterLink>
                    <FooterLink>User guides</FooterLink>
                    <FooterLink>Wen binars</FooterLink>
                  </Col>
                  <Col>
                    <Heading>Community</Heading>
                    <FooterLink>Developers</FooterLink>
                    <FooterLink>User </FooterLink>
                  </Col>
                  <Col>
                    <Heading>Company</Heading>
                    <FooterLink>About us</FooterLink>
                    <FooterLink>John us</FooterLink>
                  </Col>
                  <Col>
                    <Heading>Support</Heading>
                    <FooterLink>Help center</FooterLink>
                    <FooterLink>Chat support</FooterLink>
                  </Col>
                </Row>
                <Row>
                  <FooterContainer>
                    <Col sm={8}>
                      <FooterColumn>
                        <FooterLinkSmall>2022 Brand,Inc.</FooterLinkSmall>
                        <FooterLinkSmall>~Privacy</FooterLinkSmall>
                        <FooterLinkSmall>~Terms</FooterLinkSmall>
                        <FooterLinkSmall>~Sitemap</FooterLinkSmall>
                      </FooterColumn>
                    </Col>
                    <Col sm={4}>
                      <FooterColumnIcon>
                        <FooterLinkSmall><Icon icon="ion:logo-twitter" width="30" height="30" /></FooterLinkSmall>
                        <FooterLinkSmall><Icon icon="mdi:facebook" width="30" height="30" /></FooterLinkSmall>
                        <FooterLinkSmall><Icon icon="ph:youtube-logo-fill" width="30" height="30" /></FooterLinkSmall>
                        <FooterLinkSmall><Icon icon="mdi:linkedin" width="30" height="30" /></FooterLinkSmall>
                      </FooterColumnIcon>
                    </Col>
                  </FooterContainer>
                </Row>
              </ContainerFooter>
            </TransparentBanner>
          </ImageFooter>
        </FooterBox>

      </>
    );
  }
};
export default memo(Footer);