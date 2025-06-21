function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Generate a random number between 0 and 1
      const isSuccess = Math.random() > 0.5;

      if (isSuccess) {
        resolve("Data fetched successfully!");
      } else {
        reject("Network error occurred.");
      }
    }, 1000);
  });
}

async function fetchDataHandler() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

fetchDataHandler();
