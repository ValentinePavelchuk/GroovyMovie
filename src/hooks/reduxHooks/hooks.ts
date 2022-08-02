import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { bindActionCreators } from "redux";
import type { AppDispatch, AppState } from "../../store/store";
import { cartActions } from "../../store/cart/cart.slice";
import { productsActions } from "../../store/product/product.slice";
import { kinoActions } from "../../store/kino/kino.slice";

const allActions = {
  ...cartActions,
  ...productsActions,
  ...kinoActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
