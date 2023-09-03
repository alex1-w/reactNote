import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { useSelector, TypedUseSelectorHook, } from "react-redux";

export const useAppDispatch = () =>  useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; 