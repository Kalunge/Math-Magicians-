import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Quote from './components/Quote';
import Math from './components/Math';

function App() {
  return (
    <Router className="App">
      <Header />
      <Switch>
        <Route path="/calculator" component={Calculator} />
        <Route path="/quote" component={Quote}/>
        <Route path="/" exact component={Math} />
      </Switch>
    </Router>
  );
}

export default App;
