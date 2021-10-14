import { lazy } from 'react';

const Testimonials = lazy(() => import('../../sections/Testimonials'));
const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));
const MultipleSections = lazy(() => import('../../sections/MultipleSections'));
const ContentBlockWithButtons = lazy(
  () => import('../../sections/ContentBlock/ContentBlockWithButtons')
);
const ContentBlockWithSections = lazy(
  () => import('../../sections/ContentBlock/ContentBlockWithSections')
);
const ContentBlockWithEmailCapture = lazy(
  () => import('../../sections/ContentBlock/ContentBlockWithEmailCapture')
);

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlockWithEmailCapture
        fadeDirection='up'
        content='HeroContent'
        id='hero'
      />
      <MultipleSections content='MultipleSectionsContent' id='multiple' />
      <Testimonials content='TestimonialsContent' id='testimonials' />
      <ContentBlockWithSections
        fadeDirection='left'
        content='FirstBlockContent'
        id='client_portal'
      />
      <ContentBlockWithButtons
        fadeDirection='right'
        content='SecondBlockContent'
        id='crm'
      />
    </Container>
  );
};

export default Home;
