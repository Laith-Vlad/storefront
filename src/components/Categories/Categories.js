import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { activateCategory } from '../../Actions/CatagoryAction';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Categories = () => {
  // Use useSelector to access categories and activeCategory from the Redux store
  const categories = useSelector((state) => state.categories);
  const activeCategory = useSelector((state) => state.activeCategory);
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(activateCategory(category));
    console.log("cat :::::::::::::::::::",category)
  };
  

  return (
    <div>
      <h2>Categories</h2>
      <div style={{ display: 'flex' }}>
        <List style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
          {categories.categories.map((category) => (
            <ListItem
              key={category}
              button
              onClick={() => handleCategoryClick(category)}
              selected={activeCategory === category}
            >
              <ListItemText primary={category} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default Categories;

