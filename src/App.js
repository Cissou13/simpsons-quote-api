import React from 'react';
import axios from 'axios';
import QuoteCard from './Components/QuoteCard';

const sampleQuote = {
  character: 'Chief Wiggum',
  image:
    'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FChiefWiggum.png?1497567511716',
  quote:
    "When I look at people I don't see colors; I just see crackpot religions.",
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsonQuote: sampleQuote,
    };
  }

  getSampleQuote = () => {
    axios
      .get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then((response) => response.data)
      .then((data) =>
        this.setState({
          simpsonQuote: data[0],
        })
      );
  };
  render() {
    return (
      <div className='App'>
        <QuoteCard simpsonQuote={this.state.simpsonQuote} />
        <button type='button' onClick={this.getSampleQuote}>
          Get Simpson Quote
        </button>
      </div>
    );
  }
}
export default App;
