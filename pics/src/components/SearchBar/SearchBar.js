import React from 'react';

class SearchBar extends React.Component {
    render() {
      return (
        <div className="ui segment">
          <form className="ui form">
          <label style={{ marginBottom: '5px' }}> Image Search </label>
            <input className="field" type = "text" />
          </form>
        </div>)
      }
    }

export default SearchBar;
