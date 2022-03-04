import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import CaptureEmailForm from '../../common/CaptureEmailForm';
import Container from '../../common/Container';
import HeroContent from '../../content/HeroContent.json';

import { FooterSection, Para, Chat } from './styles';

const FooterSimple = ({ t }: any) => {
	return (
		<>
			<FooterSection>
				<Container>
					<Row justify='space-between'>
						<Col lg={12} md={12} sm={24} xs={24}>
							{/* <Language>{t("Contact")}</Language> */}
							{/* <Large to="/">{t("Tell us everything")}</Large> */}
							<Para>
								{t(
									`Do you have any question? Feel free to reach out.`
								)}
							</Para>
							<a href='mailto:hello@clientflows.io'>
								<Chat>{t(`Let's Chat`)}</Chat>
							</a>
						</Col>
						<Col lg={12} md={12} sm={24} xs={24}>
							<CaptureEmailForm subtext={HeroContent.subtext} />
						</Col>
					</Row>
					<br />
					<Row justify='center' align='bottom'>
						© {new Date().getFullYear()} CPFlow. All rights
						reserved.
					</Row>
				</Container>
			</FooterSection>
		</>
	);
};

export default withTranslation()(FooterSimple);
