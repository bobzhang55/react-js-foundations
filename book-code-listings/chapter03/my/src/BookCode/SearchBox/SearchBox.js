import { useState } from "react";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";

export function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("abc");

  return (
    <>
      <div id="search-box">
        <SearchInput term={searchTerm} onChange={setSearchTerm} />
        <SearchResults term={searchTerm} />
      </div>
      
    </>
  );
}

// export default SearchBox;
