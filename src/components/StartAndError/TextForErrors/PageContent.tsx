import "../StylesForStartAndError/StylesForStartAndError.css";
import React, { ReactNode } from "react";

interface Errortypes {
  title: string;
  children: ReactNode;
}

const PageContent: React.FC<Errortypes> = ({ title, children }) => {
  return (
    <>
      <div className={"content"}>
        <h1>{title}</h1>
        {children}
      </div>
    </>
  );
};

export default PageContent;
