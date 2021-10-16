import { lazy } from 'react';

const Testimonials = lazy(() => import('../../sections/Testimonials'));
const PricingSectionComponent = lazy(
  () => import('../../sections/PricingSectionComponent')
);
const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));

const PricingPage = () => {
  return (
    <Container>
      <ScrollToTop />
      <PricingSectionComponent />
      <Testimonials content='TestimonialsContent' id='testimonials' />
    </Container>
  );
};

export default PricingPage;
