import React from 'react';
import Search from 'antd/lib/input/Search';
const onSearch = value => console.log(value);

const SearchInput = (props) => {
  return (
    <div>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        // suffix={suffix}
        onSearch={onSearch}
      />
    </div>
  )
}

export default SearchInput;