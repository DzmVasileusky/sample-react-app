import axios from 'axios';
import 'promise.prototype.finally/auto';

export const fetchActionCreator = ({ loadingAction, errorAction, receivedAction }) => {

  return (url) => {

    return (dispatch) => {

      dispatch(errorAction(false));
      dispatch(loadingAction(true));

      axios.get(url)
      .then((response) => {

        dispatch(receivedAction(response.data));

      })
      .catch(() => {

        dispatch(errorAction(true));

      })
      .finally(() => {

        dispatch(loadingAction(false));

      });

    }

  };

};
