import React, { useEffect, useState } from 'react';
import { getDataUser } from 'services';
import { Profile, Loader } from 'components/shared';
import { isEmpty } from 'utils/helpers';

const App = () => {
  const [user, setUser] = useState({});
  const { stats, ...dataUser } = user;
  const isLoader = isEmpty(user);

  const dataRetrievalRequest = async () => {
    const user = await getDataUser();
    setUser(user);
  };

  useEffect(() => {
    dataRetrievalRequest();
  }, []);

  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <Profile
          stats={stats}
          {...dataUser}
        />
      )}
    </>
  );
};

export { App };
