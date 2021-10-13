import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import { Fade, Slide } from 'react-awesome-reveal';
import {
  ItemContent,
  ItemTitle,
  ItemWrapper,
  MultipleSectionsSection,
} from './styles';
import { ImageComponent } from '../../common/ImageComponent';

interface MultipleSectionSProps {
  title: string;
  sections: { title: string; content: string; image: string }[];
  id: string;
  t: any;
}

const MultipleSections = ({
  title,
  sections,
  id,
  t,
}: MultipleSectionSProps) => {
  return (
    <MultipleSectionsSection id={id}>
      <Fade direction='up' triggerOnce>
        <h6>{title}</h6>
        <Row justify='space-between' align='top'>
          {typeof sections === 'object' &&
            sections.map(({ title, content, image }, index) => {
              return (
                <Col key={index} lg={6} md={12} sm={12} xs={24}>
                  <ItemWrapper>
                    <ImageComponent src={image} height={'100%'} />
                    <ItemTitle>{t(title)}</ItemTitle>
                    <ItemContent>{t(content)}</ItemContent>
                  </ItemWrapper>
                </Col>
              );
            })}
        </Row>
      </Fade>
    </MultipleSectionsSection>
  );
};

export default withTranslation()(MultipleSections);
