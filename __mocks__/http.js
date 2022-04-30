const fetchData = () => {
    console.log("Using mock...")
  return Promise.resolve({ title: 'delectus aut autem'})
};

exports.fetchData = fetchData;
