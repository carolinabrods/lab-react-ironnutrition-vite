import { useState } from 'react';
import { Input } from 'antd';

// Iteration 8: Search bar
function SearchBar({ searchedFoods }) {
  const [search, setSearch] = useState('');

  const handleSearch = e => {
    setSearch(e.target.value);

    searchedFoods(e.target.value);
  };

  return (
    <div>
      <h2>Search</h2>
      <br />
      <Input
        type='text'
        value={search}
        onChange={handleSearch}
        placeholder='Search for foods'
      />
    </div>
  );
}

export default SearchBar;
