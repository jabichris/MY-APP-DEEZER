
import React from 'react';
import PrimarySearchAppBar from './Navbar.js'

function Search({ details }) {
  return (
    <section>
      <PrimarySearchAppBar details={details} />
    </section>
  );
}

export default Search;