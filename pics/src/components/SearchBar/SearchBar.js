import React from 'react';

class SearchBar extends React.Component {

  // method for detecting user input
  onInputChange(event) {
    console.log('Event: ', event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
        <label style={{ marginBottom: '5px' }}> Image Search </label>

        {/*
            { this.onInputChange } is a callback function in the
            onchange event handler leaving out the parenthesis.
            using the parethesis causes the function to fire off
            on every component render to the browser.
        */}

          {/* <input className="field" type="text" onChange={ this.onInputChange } /> */}

          {/* use alternate syntax to achieve the same result but using an arrow function
              declaring the event param and passing the event.target.value in the code block

              e abbr instead of event.
          */}

          <input className="field" type="text" onChange={ e => { console.log(e.target.value) } } />
        </form>
      </div>)
    }
  }

export default SearchBar;
