import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data: []
      }
  }

  componentDidMount() {
      fetch('https://api.punkapi.com/v2/beers')
          .then(res => res.json())
          .then(examples => {
              this.setState({ 
                data: examples })
          })
  }

  render() {
    return (
      <div>
       <ul>{this.state.data.map((data, index) => {
           return <div>
           <li key={index}>Name : {data.name}</li>
           <li key={index}>ID : {data.id}</li>
           <img key={index}src={data.image_url}/>
           <button>LIKE</button>
           </div>
          })}
        </ul>
       </div> 
   )
  }
}

export default App;
