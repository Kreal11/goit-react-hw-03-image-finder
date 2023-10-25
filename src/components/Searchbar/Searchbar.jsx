import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    searchStr: '',
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.setSearch(this.state.searchStr);
    this.setState({ searchStr: '' });
  };

  handleOnChangeInput = e => {
    this.setState({ searchStr: e.target.value });
  };

  render() {
    const { loading } = this.props;
    return (
      <header>
        <form onSubmit={this.handleOnSubmit}>
          <button type="submit" disabled={loading}>
            <span>Search</span>
          </button>

          <input
            onChange={this.handleOnChangeInput}
            type="search"
            placeholder="Search images and photos"
            disabled={loading}
          />
        </form>
      </header>
    );
  }
}
