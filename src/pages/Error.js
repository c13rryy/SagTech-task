import Navigation from "../components/HeaderNavigation/Navigation";
import React from "react";
import PageContent from "../components/TextForErrors/PageContent";
import Wrapper from "../UI/WrapperUI/Wrapper";

const ErrorPage = () => {
  const title = "An error occured !";
  const message = "Smth went wrong";

  return (
    <>
      <Wrapper>
        <Navigation />
        <PageContent title={title}>
          <p>{message}</p>
        </PageContent>
      </Wrapper>
    </>
  );
};

export default ErrorPage;
