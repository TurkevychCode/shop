import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store"
import {useNavigate, useParams} from "react-router";

export const useAppNavigate = () => useNavigate()
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppParams = () => useParams()
