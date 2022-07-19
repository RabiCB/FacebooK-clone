import "./App.css";
import React from 'react'
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from './components/Widgets'
import Login from './components/Login'
import {useStateValue} from './components/StateDataprovider'



function App() {
  const [{user} , dispatch]=useStateValue();
  return (
    <div className="App">
     
       { !user ?(
        <Login/>
        ):(
          <>
          <Header />
      <div className="app-body">
        <Sidebar />
        <Feed />
        <Widgets/>
        
      </div>
      </>

        )}
       
      
        
    </div>
  );
}

export default App;
