import styled from "styled-components";

export const BlockContainerWS = styled("section")`
  position: relative;
  padding: 4rem 0 4rem;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0 3rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 0 2rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const DisplayOnlyMobileSize = styled("div")`
  @media only screen and (min-width: 576px) {
    display: none;
  }
`;

export const HideOnlyMobileSize = styled("div")`
  @media only screen and (max-width: 575px) {
    display: none;
  }
`;