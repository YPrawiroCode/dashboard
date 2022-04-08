import React, { useState } from "react";
import { InputGroup, FormControl } from 'react-bootstrap';

const SearchBar = ({onSearch}) => {
  const [search, setSearch] = useState('');

  const onInputChange = (value) => {
    setSearch(value);
    onSearch(value);
  }
  return(
    <div className="search-bar">
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={search}
            onChange={(e) => onInputChange( e.target.value )}
        />
      </InputGroup>
    </div>
  )
};

export default SearchBar;