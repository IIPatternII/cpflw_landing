import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";

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
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <ContentBlockWithSections
        fadeDirection="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlockWithButtons
        fadeDirection="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlockWithSections
        fadeDirection="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
    </Container>
  );
};

export default Home;
