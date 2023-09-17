// categoryActions.js
export const activateCategory = (category) => {
     console.log("action---------------------",category)
    return {
      type: 'ACTIVATE_CATEGORY',
      payload: category,
    };
  };
  