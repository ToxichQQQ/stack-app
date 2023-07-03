import React from 'react';
import {RouterProvider} from "react-router";
import {router} from "./routes";
import {I18nextProvider} from "react-i18next";
import i18n from "./localization/index";

function App() {
  return <I18nextProvider i18n={i18n}>
    <RouterProvider router={router}/>
  </I18nextProvider>
}

export default App;
