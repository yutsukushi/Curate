import React from "react";
import "./style.css";


function SearchForm() {
  return (
    <div className="container">
      <form className="form-group">
          <label>Artist Search</label>
          <input type="text" className="form-control" id="bookSearch"></input>
        
          <button type="submit" className="btn btn-primary">Search</button>
      </form>    
    </div>
  );
}

export default SearchForm;