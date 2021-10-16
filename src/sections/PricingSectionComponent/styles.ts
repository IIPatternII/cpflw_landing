import styled from "styled-components";

export const PricingSection = styled("section")`
  position: relative;
  padding: 4rem 0 2rem;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 3rem 0 3rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 0 2rem;
  }
`;

export const Title = styled('h1')`
	display: block;
	margin-bottom: 0;
`;

export const SubTitle = styled('h4')`
	display: block;
`;

export const PricingTiersContainer = styled('div')`
  align-self: center;
  max-width: 1200px;
  margin: auto;
  `;


export const PricingTierItemContainer = styled('div')<any>`
  margin: 0.5rem;
  border-style: solid;
  border-color: gray;
  border-width: 1px;
  border-radius: 10px;
  box-shadow: ${ (p) => (p.preferedTier ? '-13px 15px 19px -15px rgba(0, 0, 0, 0.88)' : '')};
  background-color: white;
`;

export const TierItemHeader = styled('div')<any>`
  border-radius: 9px 9px 0 0;
  background-color: ${(p) => (p.preferedTier ? '#45bb55':'orange')};
`;

export const TierItemTitle = styled('p')`
  color: white;
  font-size: 2.5rem;
  margin: 0;
  padding-top: 1rem;
  font-weight: 600;
`;

export const TierItemSubtitle = styled('p')`
  color: white;
  font-size: 1.2rem;
  padding: 0.5rem;
  font-weight: 600;
`;


export const TierItemPrice = styled('p')`
  font-size: 3rem;
  margin: 0;
`;

export const TierItemSlashedPrice = styled('p')`
  text-decoration: line-through;
  color: red;
`;

export const TierItemFeature = styled.div`
  border-bottom: 1px solid gray;
  padding: 0.5rem;
`;

export const TierItemButon = styled.button<any>`
  margin: 2rem 0;
  padding: 0.5rem 1rem;
  background-color: ${(p) => (p.preferedTier ? '#45bb55':'orange')};
  border: none;
  border-radius: 4px;
  font-weight: 800;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  transition: transform .2s; 
  :hover {
    background-color: ${(p) => (p.preferedTier ? '#379544':'#e67300')};
    transform: scale(1.1);
  }
  :active {
    background-color: ${(p) => (p.preferedTier ? '#379544':'#e67300')};
    transform: scale(1.0);
  }
`;

