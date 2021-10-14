import styled from "styled-components";

export const MultipleSectionsSection = styled("section")`
  position: relative;
  padding: 4rem 0 4rem;
  text-align: center;
  /* display: flex; */
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 3rem 0 3rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 0 2rem;
  }
`;

export const ItemWrapper = styled("div")`
  padding: 1rem 1rem;
  /* background-color: red; */
`;

export const ItemTitle = styled("p")`
  padding-top: 1rem;
  /* font-size: 1rem; */
`;

export const ItemContent = styled("p")`
  /* padding: 0.75rem 0 0.75rem; */
  font-size: medium;
`;
