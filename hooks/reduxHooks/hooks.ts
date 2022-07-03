import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { bindActionCreators } from "redux";
import type { AppDispatch, RootState } from "../../store/store";
import { cartActions } from "../../store/cart/cart.slice";

const allActions = {
  ...cartActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
