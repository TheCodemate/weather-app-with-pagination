import { useContext } from 'react';
import ACTIONS from 'store/actions';
import { Context } from 'context';

const usePagination = () => {
  const { state, dispatch } = useContext(Context);
  const { totalPageNumber, currentPage } = state;

  const goToPrevPage = () => {
    if (currentPage <= 1) {
      return;
    }
    dispatch({ type: ACTIONS.GO_TO_PREV_PAGE });
  };
  const goToNextPage = () => {
    if (currentPage >= totalPageNumber) {
      return;
    }
    dispatch({ type: ACTIONS.GO_TO_NEXT_PAGE });
  };
  return {
    goToNextPage,
    goToPrevPage
  };
};

export default usePagination;
