import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Conditional from './components/Conditional';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todos : Todos,
      isLoading : true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading : false
      })
    }, 2000)
  }


  render() {

    return (
      <div>
        <Header/>
        
        {this.state.isLoading ? <main className='container'><p>Loading todo items</p></main> : <MainContent todoItems={this.state.todos}/>}

        <Footer/>
      </div>

    );
  }
}

export default App;