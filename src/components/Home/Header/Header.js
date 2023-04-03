import React from 'react';
import classes from './Header.module.scss';

import Title from '../../Title/Title';
import Exit from './Exit/Exit';

function Header() {
  return (
    <header className={classes.Header}>
      <Title />
      <Exit />
    </header>
  );
}

export default Header;
