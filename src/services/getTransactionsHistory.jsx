export const getTransactionsHistory = async () => {
  try {
    return await fetch(`${process.env.PUBLIC_URL}/transactions.json`).then(res => res.json());
  } catch (error) {
    console.log(error.name);
  }
};
