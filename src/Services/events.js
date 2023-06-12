const token = process.env.REACT_APP_TOKEN;
const url = "https://e54b-81-106-144-73.ngrok.io/api/v1";

const recommendedEvents = () => {
  const fetchConfig = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return window
    .fetch(`${url}/events/recommended`, fetchConfig)
    .then((resp) => resp.json())
    .then((resp) => resp)
    .catch((err) => err);
};

const events = () => {
  const fetchConfig = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return window
    .fetch(`${url}/events`, fetchConfig)
    .then((resp) => resp.json())
    .then((resp) => resp)
    .catch((err) => err);
};

const createEvent = (formData) => {
  const fetchConfig = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  };

  return window
    .fetch(`${url}/events/create`, fetchConfig)
    .then((resp) => resp.json())
    .then((resp) => resp)
    .catch((err) => err);
};

const obj = { recommendedEvents, events, createEvent };
export default obj;
