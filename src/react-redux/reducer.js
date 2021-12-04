import { POST_DATA } from "./actions";

export default function reducer(state, action) {
  if (action.type === POST_DATA) {
    async function postData(url, data) {
      const response = await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      // .then((response) => response.json())
      // .then((data) => {
      //   console.log("Success", data);
      // })
      // .catch((error) => {
      //   console.error("Error", error);
      // });
    }

    postData(action.payload.apiUrl, {
      email: action.payload.email,
      password: action.payload.password,
    });

    return { ...state };
  }
  return state;
}
