import { lazy } from 'react';
//TODO: Lazy load all components!
import MultipleSections from '../../components/MultipleSections';
//TODO: Lazy load all components!
import Testimonials from '../../components/Testimonials';

const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));
const ContentBlockWithButtons = lazy(
  () => import('../../components/ContentBlock/ContentBlockWithButtons')
);
const ContentBlockWithSections = lazy(
  () => import('../../components/ContentBlock/ContentBlockWithSections')
);
const ContentBlockWithEmailCapture = lazy(
  () => import('../../components/ContentBlock/ContentBlockWithEmailCapture')
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
