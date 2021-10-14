import { lazy } from 'react';

const Container = lazy(() => import('../../common/Container'));
const MiddleBlock = lazy(() => import('../../sections/MiddleBlock'));

const ConfirmEmailPage = () => {
  return (
    <Container>
      <MiddleBlock content='ConfirmEmailContent' />
    </Container>
  );
};

export default ConfirmEmailPage;
