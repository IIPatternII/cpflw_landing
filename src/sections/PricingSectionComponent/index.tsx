import { Col, Row } from 'antd';
import { ImageComponent } from '../../common/ImageComponent';
import {
  PricingSection,
  PricingTierItemContainer,
  PricingTiersContainer,
  SubTitle,
  TierItemButon,
  TierItemFeature,
  TierItemHeader,
  TierItemPrice,
  TierItemSlashedPrice,
  TierItemSubtitle,
  TierItemTitle,
  Title,
} from './styles';

const tiers: ITier[] = [
  {
    title: 'Basic',
    subtitle: 'Reach up to 100 likes!',
    icon: 'star.svg',
    price: 9,
    slashedPrice: 12,
    subPriceText: 'perfect for you!',
    features: ['100% safe', 'feature 1', 'feature 2'],
    buttonText: 'Start now!',
    preferedTier: false,
  },
  {
    title: 'Medium',
    subtitle: 'Reach up to 200 likes!',
    icon: 'star.svg',
    price: 14,
    slashedPrice: 20,
    subPriceText: 'perfect for you!',
    features: ['100% safe', 'feature 1', 'feature 2'],
    buttonText: 'Start now!',
    preferedTier: false,
  },
  {
    title: 'Profesional',
    subtitle: 'Reach up to 300 likes!',
    icon: 'star.svg',
    price: 29,
    slashedPrice: 40,
    subPriceText: 'perfect for you!',
    features: ['100% safe', 'feature 1', 'feature 2'],
    buttonText: 'Start now!',
    preferedTier: true,
  },
  {
    title: 'Extreme',
    subtitle: 'Reach up to 400 likes!',
    icon: 'star.svg',
    price: 44,
    slashedPrice: 60,
    subPriceText: 'perfect for you!',
    features: ['100% safe', 'feature 1', 'feature 2'],
    buttonText: 'Start now!',
    preferedTier: false,
  },
];

interface ITier {
  title: string;
  subtitle: string;
  icon: string;
  price: number;
  slashedPrice: number;
  subPriceText: string;
  features: string[];
  buttonText: string;
  preferedTier: boolean;
}

const PricingSectionComponent = () => {
  return (
    <PricingSection>
      <Title>Pricing</Title>
      <SubTitle>awesome prices!</SubTitle>
      <PricingTiersContainer>
        <Row justify='space-between' align='top'>
          {tiers.map((tier, index) => {
            return (
              <Col key={index} lg={6} md={12} sm={12} xs={24}>
                <PricingTierItemContainer preferedTier={tier.preferedTier}>
                  <TierItemHeader preferedTier={tier.preferedTier}>
                    <TierItemTitle>{tier.title}</TierItemTitle>
                    <TierItemSubtitle>{tier.subtitle}</TierItemSubtitle>
                  </TierItemHeader>
                  {[...Array(index + 1)].map((_) => {
                    return (
                      <ImageComponent
                        src={tier.icon}
                        height={'25px'}
                        width={'25px'}
                        key={index}
                      />
                    );
                  })}
                  <TierItemPrice>${tier.price}</TierItemPrice>
                  <TierItemSlashedPrice>
                    ${tier.slashedPrice}
                  </TierItemSlashedPrice>
                  {tier.features.map((feature) => {
                    return <TierItemFeature>{feature}</TierItemFeature>;
                  })}
                  <TierItemButon preferedTier={tier.preferedTier}>
                    {tier.buttonText}
                  </TierItemButon>
                </PricingTierItemContainer>
              </Col>
            );
          })}
        </Row>
      </PricingTiersContainer>
    </PricingSection>
  );
};

export default PricingSectionComponent;
