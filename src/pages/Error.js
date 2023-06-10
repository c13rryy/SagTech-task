import Navigation from "../components/HeaderNavigation/Navigation";
import React from "react";
import PageContent from "../components/TextForErrors/PageContent";
import Wrapper from "../UI/WrapperUI/Wrapper";

const ErrorPage = () => {
<<<<<<< HEAD
  const title = "An error occured !";
  const message = "Smth went wrong";
=======
  // TODO: let -> const
  let title = "An error occured !";
  let message = "Smth went wrong";
>>>>>>> 1816760a0fd9aba77dc8dfa13bfff9a30a36d4d3

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
