"use client";

import { Provider } from "react-redux";
import { store } from "../Redux/store";

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <div>{children}</div>
    </Provider>
  );
};

export default Providers;
