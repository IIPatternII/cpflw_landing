import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { Slide } from 'react-awesome-reveal';
import { Button } from '../../common/Button';
import { MiddleBlockSection, Content, ContentWrapper } from './styles';

interface MiddleBlockProps {
  content: string;
}

interface IButton {
  text: string;
  scrollTo: string;
  color?: string;
}

const MiddleBlock = ({ content }: MiddleBlockProps) => {
  const { t } = useTranslation(content);
  const button: IButton = t('button', { returnObjects: true });

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <MiddleBlockSection>
      <Slide direction='up'>
        <Row justify='center' align='middle'>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t('title')}</h6>
              <Content>{t('text')}</Content>
              {button && (
                <Button
                  name='submit'
                  onClick={() => scrollTo(t(button.scrollTo))}
                >
                  {t(button.text)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default MiddleBlock;
