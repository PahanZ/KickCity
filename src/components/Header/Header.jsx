import React from 'react';
import './styles.css';
import Logo from '../Logo/Logo';
import SelectCity from '../SelectCity/SelectCity';
// import Categories from '../Categories/Categories';

export default () => (
  <div className="header">
    <Logo />
    <SelectCity />
    {/* <Categories /> */}
  </div>
);

