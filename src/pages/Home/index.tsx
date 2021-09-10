import { lazy } from "react";
import HeroContent from "../../content/HeroContent.json";
import FirstBlockContent from "../../content/FirstBlockContent.json";
import SecondBlockContent from "../../content/SecondBlockContent.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlockWithButtons = lazy(() => import("../../components/ContentBlock/ContentBlockWithButtons"));
const ContentBlockWithSections = lazy(() => import("../../components/ContentBlock/ContentBlockWithSections"));
const ContentBlockWithEmailCapture = lazy(() => import("../../components/ContentBlock/ContentBlockWithEmailCapture"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlockWithEmailCapture
        fadeDirection="up"
        title={HeroContent.title}
        content={HeroContent.text}
        subtext={HeroContent.subtext}
        icon="developer.svg"
        id="hero"
      />
      <ContentBlockWithSections
        fadeDirection="left"
        title={FirstBlockContent.title}
        content={FirstBlockContent.text}
        section={FirstBlockContent.section}
        icon="product-launch.svg"
        id="client_portal"
      />
      <ContentBlockWithButtons
        fadeDirection="right"
        title={SecondBlockContent.title}
        content={SecondBlockContent.text}
        button={SecondBlockContent.button}
        icon="graphs.svg"
        id="crm"
      />
    </Container>
  );
};

export default Home;
