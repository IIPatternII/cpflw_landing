import styled from "styled-components";

export const MultipleSectionsSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  /* display: flex; */
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
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

// export const ContentWrapper = styled("div")`
//   max-width: 570px;

//   @media only screen and (max-width: 768px) {
//     max-width: 100%;
//   }
// `;

