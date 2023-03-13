import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkCategoryStatusAction } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categoriesData = useSelector((state) => state.categories);

  const handleCheckStatus = () => {
    dispatch(checkCategoryStatusAction());
  };

  return (
    <section className="cat-section">
      <p className="info-txt">{categoriesData}</p>
      <button className="primary-button" type="button" onClick={handleCheckStatus}>Check status</button>
    </section>
  );
};

export default Categories;
