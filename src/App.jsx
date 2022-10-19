import React, { useEffect, useState } from 'react';
import {
  getDataUser,
  getStatisticsData,
  getFriendList,
  getTransactionsHistory,
} from 'services';
import {
  Profile,
  Loader,
  Statistics,
  FriendList,
  TransactionHistory,
} from 'components/shared';
import { isEmpty } from 'utils/helpers';

const App = () => {
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  const [friendList, setFriendList] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const { stats, username, tag, location, avatar } = user;
  const isLoader = isEmpty(user);

  const requestRetrieveUserData = async () => {
    const user = await getDataUser();
    setUser(user);
  };

  const requestRetrieveStatisticsData = async () => {
    const data = await getStatisticsData();
    setData(data);
  };

  const requestRetrieveFriendList = async () => {
    const friendList = await getFriendList();
    setFriendList(friendList);
  };

  const requestRetrieveTransactions = async () => {
    const transactions = await getTransactionsHistory();
    setTransactions(transactions);
  };

  useEffect(() => {
    requestRetrieveUserData();
    requestRetrieveStatisticsData();
    requestRetrieveFriendList();
    requestRetrieveTransactions();
  }, []);

  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <>
          <Profile
            stats={stats}
            username={username}
            tag={tag}
            location={location}
            avatar={avatar}
          />
          <Statistics title={'upload stats'} stats={data} />
          <FriendList friends={friendList} />
          <TransactionHistory items={transactions} />
        </>
      )}
    </>
  );
};

export { App };
