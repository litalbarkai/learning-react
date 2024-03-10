import { Component } from 'react';

import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
          () => {
            return { monsters: users };
          }
        )
      );
  }

  onSearchFieldChanged = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }; //js assumes the key is the variable name
    })
  }

  render() {
    const { onSearchFieldChanged } = this;
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>

        <SearchBox  className='monsters-search-box'
                    onChangeHandler={onSearchFieldChanged}
                    placeholder='search monsters'/>

        <CardList elements={filteredMonsters} />
      </div>
    );
  }
}

export default App;
