import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import { Fade } from 'react-awesome-reveal';
import {
  ItemExtra,
  ItemName,
  ItemQuote,
  ItemWrapper,
  Person,
  StarsContainer,
  TestimonialsSection,
} from './styles';
import { ImageComponent } from '../../common/ImageComponent';

interface TestimonialsProps {
  title: string;
  testimonials: { name: string; extra: string; image: string; quote: string }[];
  id: string;
  t: any;
}

const Testimonials = ({ title, testimonials, id, t }: TestimonialsProps) => {
  return (
    <TestimonialsSection id={id}>
      <Fade direction='up' triggerOnce>
        <h6>{title}</h6>
        <Row justify='space-between' align='top'>
          {typeof testimonials === 'object' &&
            testimonials.map(({ name, extra, image, quote }, index) => {
              return (
                <Col key={index} lg={6} md={12} sm={12} xs={24}>
                  <ItemWrapper>
                    <StarsContainer>
                      {[1, 2, 3, 4, 5].map((_) => {
                        return (
                          <ImageComponent
                            rounded
                            src='star.svg'
                            height={'25px'}
                            width={'25px'}
                          />
                        );
                      })}
                    </StarsContainer>
                    <ItemQuote>{t(quote)}</ItemQuote>
                    <Person>
                      <ImageComponent
                        rounded
                        src={image}
                        height={'55px'}
                        width={'55px'}
                      />
                      <div style={{ padding: '0.5rem' }}>
                        <ItemName>{t(name)}</ItemName>
                        <ItemExtra>{t(extra)}</ItemExtra>
                      </div>
                    </Person>
                  </ItemWrapper>
                </Col>
              );
            })}
        </Row>
      </Fade>
    </TestimonialsSection>
  );
};

export default withTranslation()(Testimonials);
