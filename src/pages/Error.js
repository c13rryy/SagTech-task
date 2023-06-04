import Navigation from "../components/HeaderNavigation/Navigation";
import React from "react";
import PageContent from "../components/TextForErrors/PageContent";
import Wrapper from "../UI/Wrapper";

const ErrorPage = () => {
  // TODO: let -> const
  let title = "An error occured !";
  let message = "Smth went wrong";

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
