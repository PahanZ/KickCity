import React from 'react';
import './styles.css';
import Logo from '../Logo/Logo';
import SelectCity from '../SelectCity/SelectCity';
import Categories from '../Categories/Categories';
import Explore from '../Explore/Explore';
import Search from '../Search/Search';

export default () => (
  <div className="header">
    <Logo />
    <SelectCity />
    <Categories />
    <Explore />
    <Search />
  </div>
);

