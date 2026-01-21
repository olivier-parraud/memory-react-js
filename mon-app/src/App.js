import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button'
import Card from './components/Card/Card';
import Header from './components/Title/Header';





function App() {
  return (
    <div className="App">
      <Card /> 
      <Button text='Je suis un bouton' />
      <Header />
    </div>
  );
}

export default App;

