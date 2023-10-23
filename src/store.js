import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";

import * as api from "./config.js";
import { themeReducer } from "./features/theme/themeSlice.js";
import { controlsReducer } from "./features/controls/controlsSlice.js";
import { countryReducer } from "./features/countries/countriesSlice.js";
import { detailsReducer } from "./features/details/detailsSlice.js";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        controls: controlsReducer,
        countries: countryReducer,
        details: detailsReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                client: axios,
                api
            }
        },
        serializableCheck: false
    })
});