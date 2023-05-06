import React from 'react';

import { useSelector } from 'react-redux';

const HomePage = () => {
  const { user } = useSelector((state) => state.auth);

  const className = !user ? 'bg' : '';

  return (
    <React.Fragment>
      <section className={className} >
        {user && <h1>Home</h1>}

        {!user && <p className="invalid">CONTENT INVALID</p>}
      </section>
    </React.Fragment>
  );
};

export default HomePage;
