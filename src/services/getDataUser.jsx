export const getDataUser = async () => {
  try {
    return await fetch(`${process.env.PUBLIC_URL}/user.json`).then(res => res.json());
  } catch (error) {
    console.log(error.name);
  }
};
