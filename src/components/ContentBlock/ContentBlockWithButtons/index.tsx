import { Row, Col } from 'antd';
import { Button } from '../../../common/Button';
import { ImageComponent } from '../../../common/ImageComponent';
import { ContentBlockProps } from '../types';
import { Fade } from 'react-awesome-reveal';
import {
  BlockContainerWB,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from './styles';
import { useTranslation } from 'react-i18next';

interface IButton {
  title: string;
  scrollTo: string;
  color?: string;
}

const ContentBlockWithButtons = ({
  content,
  id,
  fadeDirection,
}: ContentBlockProps) => {
  const { t } = useTranslation(content);
  const button: IButton[] = t('button', { returnObjects: true });
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <BlockContainerWB>
      <Fade direction={fadeDirection} triggerOnce>
        <Row justify='space-between' align='middle' id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t('title')}</h6>
              <Content>{t('text')}</Content>
              <ButtonWrapper>
                {typeof button === 'object' &&
                  button.map((item: IButton, id: number) => {
                    return (
                      <Button
                        key={id}
                        color={item.color ?? item.color}
                        fixedWidth={true}
                        onClick={() => scrollTo(item.scrollTo)}
                      >
                        {item.title}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <ImageComponent src={t('image')} width='100%' height='100%' />
          </Col>
        </Row>
      </Fade>
    </BlockContainerWB>
  );
};

export default ContentBlockWithButtons;
