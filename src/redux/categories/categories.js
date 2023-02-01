const STATUS = 'bookstore/categories/STATUS';

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case STATUS:
      return 'under construction';
    default:
      return state;
  }
};

export default categoryReducer;

export const checkCategoryStatusAction = () => ({ type: STATUS });
