import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import { ContentBlockProps } from '../types';
import { Fade } from 'react-awesome-reveal';
import { BlockContainerWEmail, Content, ContentWrapper } from './styles';
import { ImageComponent } from '../../../common/ImageComponent';
import CaptureEmailForm from '../../../common/CaptureEmailForm';

const ContentBlockWithEmailCapture = ({
  title,
  content,
  subtext,
  image,
  t,
  id,
  fadeDirection,
}: ContentBlockProps) => {
  return (
    <BlockContainerWEmail>
      <Fade direction={fadeDirection} triggerOnce>
        <Row justify='space-between' align='middle' id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <CaptureEmailForm subtext={subtext} />
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <ImageComponent src={image} width='100%' height='100%' />
          </Col>
        </Row>
      </Fade>
    </BlockContainerWEmail>
  );
};

export default withTranslation()(ContentBlockWithEmailCapture);
