
import Navigation from "../components/Navigation";
import React from "react";
import PageContent from "../components/PageContent";

const ErrorPage = () => {
   /*  const error = useRouteError(); */
    let title = "An error occured !";
  let message = "Smth went wrong";

  return(
    <>
    <Navigation />
    <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  )
};

export default ErrorPage;