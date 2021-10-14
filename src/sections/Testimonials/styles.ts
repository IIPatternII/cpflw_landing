import styled from "styled-components";

export const TestimonialsSection = styled("section")`
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
  /* margin: 1rem 1rem; */
  /* border-style: solid; */
  border-radius: 1rem;
  /* background-color: red; */
`;


export const StarsContainer = styled("div")`
  margin-bottom: 0.5rem;

`;

export const Person = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* padding-left: 3rem; */
`;

export const ItemName = styled("p")`
  /* font-size: 1rem; */
  margin-bottom: 0;
  /* text-align: left; */
`;

export const ItemExtra = styled("p")`
  margin-bottom: 0;
  color: gray;
  font-size: medium;
  text-align: left;
`;

export const ItemQuote = styled("p")`
  margin-bottom: 0.5rem;
  /* padding: 0.75rem 0 0.75rem; */
  font-style: italic;
  font-size: medium;
`;