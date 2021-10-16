import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation('pricing');
  const tiers: ITier[] = t('prices', { returnObjects: true });
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
                  {[...Array(index + 1)].map((_, index) => {
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
                  {tier.features.map((feature, index) => {
                    return (
                      <TierItemFeature key={index}>{feature}</TierItemFeature>
                    );
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
