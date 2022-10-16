export const getStatisticsData = async () => {
  try {
    return await fetch(`${process.env.PUBLIC_URL}/data.json`).then(res => res.json());
  } catch (error) {
    console.log(error.name);
  }
};
