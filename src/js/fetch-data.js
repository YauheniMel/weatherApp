function fetchData(method, URL) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, URL);

    xhr.onload = () => resolve(xhr.response);
    xhr.onerror = () => reject(new Error(`ERROR: ${xhr.status}`));

    xhr.send();
  });

  return promise;
}

export default fetchData;
