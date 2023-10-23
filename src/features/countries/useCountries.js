import { useDispatch, useSelector } from "react-redux";
import { selectControls } from "../controls/controlsSlice.js";
import { loadCountries, selectCountriesInfo, selectVisibleCountries } from "./countriesSlice.js";
import { useEffect } from "react";


export const useCountries = () => {

    const controls = useSelector(selectControls);
    const countries = useSelector((state) => selectVisibleCountries(state, controls));
    const { status, error, qty } = useSelector(selectCountriesInfo);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!qty) {
            dispatch(loadCountries());
        }
    }, [qty, dispatch]);

    return [countries, { status, error }]
}