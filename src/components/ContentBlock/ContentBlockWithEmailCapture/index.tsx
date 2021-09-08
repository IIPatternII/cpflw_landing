import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  BlockContainerWB,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";
import ConvertKitForm from 'convertkit-react';


const convertkitConfig = {
  formId: 2587777,
  template: 'minimal',
  emailPlaceholder: 'Enter an email address',
  submitText: 'Sign up',
}

const ContentBlockWithEmailCapture = ({
  title,
  content,
  icon,
  t,
  id,
  fadeDirection
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <BlockContainerWB>
      <Fade direction={fadeDirection} triggerOnce>
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ConvertKitForm {...convertkitConfig}/>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
        </Row>
      </Fade>
    </BlockContainerWB>
  );
};

export default withTranslation()(ContentBlockWithEmailCapture);
