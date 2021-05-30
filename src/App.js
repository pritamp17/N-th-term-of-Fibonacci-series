import {  React, useEffect, useState} from "react";
import { Form} from "semantic-ui-react";
import './App.css';
import ParticlesBg from 'particles-bg'


function App() {
  const [number, setNumber] = useState(0);
  const [ans, setAns] = useState(0);
  const [error, setError] = useState('');

 

  useEffect(() => {
   setError("");
   setAns(1);
   setNumber(1);
  }, [])


  var fib = (n) => {
    var mem = [];
    for (var i=0; i <=n; i++) {
        if (i === 0) mem[i] = 0;
        else if (i <=2) mem[i] = 1;
        else {
            mem[i] = mem[i-1] + mem[i-2];
        }
    }
    return mem[n];
}

  const handleSubmit = () => {
    let n = fib(number);
    setAns(n);
  }
  const handleSearch = (e) => {
    console.log(e.target.value);
   if(e.target.value - '0' < 0 ) setError("Enter positive number")
   const num = e.target.value
    setNumber(num);
 }

  let config = {
    position: {height:120}
  }

  return (
    
    <div className="App">
     <div className="navbar">
     <h2>Fibonacci Number search</h2></div>

    <div className="search">
        <Form onSubmit={handleSubmit} autoComplete="off">
              <Form.Group>
                <Form.Input placeholder='fibonacci number' type='number' name='fibonacci number' onChange={handleSearch}/>
                <Form.Button content='Search' class="ui primary button"/>
              </Form.Group>
            </Form>
    </div>
    
    
    {error ? (<h2 className="result">{error}</h2>) :
    (
     
      <h2 className="result">{parseInt(number)}'th fibonacci term is {ans}</h2>
      
 ) }   
      
 <ParticlesBg type="ball"  color="#e7e6e1" config={config} bg={true} />
  </div>
  
  );
}

export default App;
