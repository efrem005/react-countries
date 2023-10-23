import { useDispatch } from "react-redux";
import { clearControls } from "./controlsSlice.js";

export const useCleanup = () => {
    const dispatch = useDispatch();

    const cleanUp = () => dispatch(clearControls())

    return [cleanUp]
}