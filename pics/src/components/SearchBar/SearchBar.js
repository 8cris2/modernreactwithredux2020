import React from 'react';

class SearchBar extends React.Component {

  // initialise state object
  state = { term: '' };

  onFormSubmit = (event) => {
    
    event.preventDefault();
    console.log('Term: ', this.state.term);

  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={ this.onFormSubmit } className="ui form">
        <label style={{ marginBottom: '5px' }}> Image Search </label>

          <input className="field"
                type="text"
                value={ this.state.term }
                onChange={ (e) => this.setState({ term: e.target.value }) } />
        </form>
      </div>)
    }
  }

export default SearchBar;
