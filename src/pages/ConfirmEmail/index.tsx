import { lazy } from "react";

import ConfirmEmailContent from "../../content/ConfirmEmailContent.json";

const Container = lazy(() => import("../../common/Container"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));

const Home = () => {
  return (
    <Container>
	  <MiddleBlock title={ConfirmEmailContent.title} content={ConfirmEmailContent.text}/>
    </Container>
  );
};

export default Home;
