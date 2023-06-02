import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';


import Adder from './components/Adder';
import Employee from './components/Employee';
import Adder1 from './components/Adder1';
import Card from './components/Card';
import Event from './components/Event';
import CCounter from './components/CCounter';
import CUserList from './components/CUserList';
import { User } from './model/User';
import FUseEffect from './components/FUseEffect';
import FUseMemo from './components/FUseMemo';
import CCounterControl from './redux/CCounterControl';
import CCounterHistory from './redux/CCounterHistory';
import CCounterResult from './redux/CCounterResult';
import FCounterResult from './redux/FCounterResult';
import { BrowserRouter } from 'react-router-dom';
import RoutingShell1 from './routing/RoutingShell1';




function App() {

  let num1:number=3;
  let num2:number=7;

  let emp1 = {
    empid:1,
        empname:"sagar",
        address:{
            city:"Pune",
            state:"Maharashtra",
            pincode:411027
        }

  }


  let users:User[]=[
    new User("user1","password1"),
    new User("user2","password2"),
    new User("user3","password3")
  ]

  let username:any= useRef('')
  let password:any= useRef('')

  const [allusers , adduser] = useState(users);

  const [count, setCount] = useState(0);

  let titlemarkup=<h1>App Title</h1>
  return (

      
      <Card title={titlemarkup}>
      {/* <Adder n1={num1} n2={num2}/>
      <Adder1 n1={num1} n2={num2}/>
      <Employee empdetails={emp1}></Employee> */}

      {/* <Event></Event> */}

      {/* <CCounter InitialCount={100}></CCounter>
      <CCounter InitialCount={1000}></CCounter> */}

        {/* <div>           //eg.
        <h6>Add new user</h6>
        <p>
          UserName : <input type="text" ref={username}/>
        </p><br/>
        
        <p>
          Password : <input type="password" ref={password}/>
        </p><br/>

        <button onClick={addUser} className="btn btn-primary"> Add User</button>

      </div> */}
      {/* <CUserList usersss={allusers}></CUserList> */}

      {/* <button onClick={Increment}> Change Increment</button>    //eg
      <span>{count}</span>
      <CCounter InitialCount={count}></CCounter> */}

      {/* <FUseEffect></FUseEffect>   */}

      {/* <FUseMemo></FUseMemo> */}

      {/* <CCounterControl/><br/>
      <CCounterHistory/><br/>
      <CCounterResult/> */}


      {/* <FCounterResult/> */}

      <BrowserRouter>
      <RoutingShell1></RoutingShell1>
      </BrowserRouter>

     
      </Card>
      
  
  );

  function Increment(){
    let c =count;
    ++c;
    setCount(c);
  }

  function addUser(){
    
    let uname = username.current.value;
    let pwd = password.current.value;
    
    console.log(`${uname} ${pwd}`);

    let newuser:User= new User(uname,pwd)

    adduser(allusers.concat(newuser));
    
  }
}

export default App;
