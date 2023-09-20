// categoryActions.js
export const activateCategory = (category) => {
    return {
      type: 'ACTIVATE_CATEGORY',
      payload: category,
    };
  };
  export const increment = (payload) => {
    return {
      type: 'FIRST',
      payload: payload,

    };
  };