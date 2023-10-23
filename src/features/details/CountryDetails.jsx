import { Info } from "./Info.jsx";
import { useDetails } from "./useDetails.js";
import { Loading } from "../../components/Loading.jsx";


export const CountryDetails = ({name = '', navigate}) => {

    const {status, error, currentCountry} = useDetails(name)

    return (
        <>
            {status === "loading" && <Loading />}
            {error && <h2>{error}</h2>}
            {currentCountry && <Info push={navigate} {...currentCountry} />}
        </>
    );
};