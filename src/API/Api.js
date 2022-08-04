const Api = (url) => fetch(`http://127.0.0.1:3003/${url}`).then((response) => response.json());

export default Api;
