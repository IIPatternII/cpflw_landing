import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { Fade } from 'react-awesome-reveal';
import {
  ItemContent,
  ItemTitle,
  ItemWrapper,
  MultipleSectionsSection,
} from './styles';
import { ImageComponent } from '../../common/ImageComponent';

interface MultipleSectionSProps {
  content: string;
  id: string;
}

interface Section {
  title: string;
  content: string;
  image: string;
}

const MultipleSections = ({ content, id }: MultipleSectionSProps) => {
  const { t } = useTranslation(content);
  const section: Section[] = t('sections', { returnObjects: true });

  return (
    <MultipleSectionsSection id={id}>
      <Fade direction='up' triggerOnce>
        <h6>{t('title')}</h6>
        <Row justify='space-between' align='top'>
          {typeof section === 'object' &&
            section.map(({ title, content, image }, index) => {
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

export default MultipleSections;
