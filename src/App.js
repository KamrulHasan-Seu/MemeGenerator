import React,{Component} from 'react';
import Header from './components/Header.jsx'
import MemeGenerator from './components/Memegenerator'

class App extends Component {
 render(){
  return (
    <div>
      <Header/>
    <MemeGenerator/>
    </div>
   );
 }
}

export default App;
