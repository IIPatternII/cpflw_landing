import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { ContentBlockProps } from '../types';
import { Fade } from 'react-awesome-reveal';

import { ImageComponent } from '../../../common/ImageComponent';
import {
  BlockContainerWS,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  DisplayOnlyMobileSize,
  HideOnlyMobileSize,
} from './styles';

interface Section {
  title: string;
  text: string;
  icon: string;
}

const ContentBlockWithSections = ({
  content,
  id,
  fadeDirection,
}: ContentBlockProps) => {
  const { t } = useTranslation(content);
  const sections: Section[] = t('sections', {
    returnObjects: true,
  });

  return (
    <BlockContainerWS>
      <Fade direction={fadeDirection} triggerOnce>
        <DisplayOnlyMobileSize>
          <Row justify='space-between' align='middle' id={id}>
            <Col lg={11} md={11} sm={11} xs={24}>
              <ContentWrapper>
                <h6>{t('title')}</h6>
                <Content>{t('text')}</Content>
                <ServiceWrapper>
                  <Row justify='space-between'>
                    {typeof sections === 'object' &&
                      sections.map((item: Section, id: number) => {
                        return (
                          <Col key={id} span={11}>
                            <ImageComponent
                              src={item.icon}
                              width='60px'
                              height='60px'
                            />
                            <MinTitle>{item.title}</MinTitle>
                            <MinPara>{item.text}</MinPara>
                          </Col>
                        );
                      })}
                  </Row>
                </ServiceWrapper>
              </ContentWrapper>
            </Col>
            <Col lg={11} md={11} sm={12} xs={24}>
              <ImageComponent src={t('image')} width='100%' height='100%' />
            </Col>
          </Row>
        </DisplayOnlyMobileSize>
        <HideOnlyMobileSize>
          <Row justify='space-between' align='middle' id={id}>
            <Col lg={11} md={11} sm={12} xs={24}>
              <ImageComponent src={t('image')} width='100%' height='100%' />
            </Col>
            <Col lg={11} md={11} sm={11} xs={24}>
              <ContentWrapper>
                <h6>{t('title')}</h6>
                <Content>{t('text')}</Content>
                <ServiceWrapper>
                  <Row justify='space-between'>
                    {typeof sections === 'object' &&
                      sections.map((item: Section, id: number) => {
                        return (
                          <Col key={id} span={11}>
                            <ImageComponent
                              src={item.icon}
                              width='60px'
                              height='60px'
                            />
                            <MinTitle>{t(item.title)}</MinTitle>
                            <MinPara>{t(item.text)}</MinPara>
                          </Col>
                        );
                      })}
                  </Row>
                </ServiceWrapper>
              </ContentWrapper>
            </Col>
          </Row>
        </HideOnlyMobileSize>
      </Fade>
    </BlockContainerWS>
  );
};

export default ContentBlockWithSections;
