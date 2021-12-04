import { POST_DATA } from "./actions";

export default function reducer(state, action) {
  if (action.type === POST_DATA) {
    async function postData(apiUrl = "", data = {}) {
      const response = await fetch(apiUrl, {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }

    postData(action.payload.apiUrl, {
      email: action.payload.email,
      password: action.payload.password,
    }).then((data) => {
      console.log(data);
    });
    // const postOptions = {
    //   method: "POST",
    //   mode: "no-cors",
    //   cache: "no-cache",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: action.payload.email,
    //     password: action.payload.password,
    //   }),
    // };
    // fetch(action.payload.apiUrl, postOptions);

    return { ...state };
  }
  return state;
}
