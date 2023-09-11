import React from 'react'
import './App.css';
import HelloWorld from './HelloWorld/HelloWorld.jsx';
import ColorChanger from './ColorChanger/ColorChanger.jsx';
import ContactForm from './ContactForm/ContactForm';

function App() {
  return (
    <div className ="App">
        <h2>React Lab 1. 1st Assignment</h2>
      <HelloWorld/>
      <ColorChanger/>
      <ContactForm/>
    </div>
  );
}

export default App
