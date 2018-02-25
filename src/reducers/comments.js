export const comments = (state = [], action) => {

  switch (action.type) {

    case 'ADD_COMMENT':

      return [...state, {
        ...action.comment,
        id: state.length + 1
      }];

    case 'ADD_COMMENTS':
      return [...state, ...action.comments];

    default:
      return state;

  }

};