export const getFriendList = async () => {
  try {
    return await fetch(`${process.env.PUBLIC_URL}/friends.json`).then(res => res.json());
  } catch (error) {
    console.log(error.name);
  }
};
