import React from 'react';
import ReactDOM from 'react-dom';
import Tab from './tabs';
import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<div>
    <Tab tabs={[{title: "hello", content: "world"}, {title: "lol",content:"cats"}]} />
    <Clock />
    <Weather />
    <Autocomplete className="auto" names={["John", "Sue", "Janine", "Sharon", "Anthony"]}/>
  </div>,root);
});
