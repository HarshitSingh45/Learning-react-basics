import React, { useState } from "react";
import EvntHandler from "./components/EvntHandler";
import Clock from "./components/Clock";
import ConditionalRenderingIFELSE from "./components/ConditionalRenderingIFELSE";
import MyName from "./components/MyName";
import LearningForm from "./components/LearningForm";
import UseStateHook from "./components/UseStateHook";
import UseEffectHook from "./components/UseEffectHook";
import CustomHooks from "./components/CustomHooks";
import Modal from './components/Modal';
import PasswordAuthenticator from "./components/PasswordAuthenticator";
import FetchAPIData from "./components/FetchAPIData";
import State from "./components/State";

function App() {
  const [modalStatus, setModalStatus] = useState(false);
  const name = [1,2,3,4,5];
  return (
    <div>
      <h1>Check out modal functionality</h1>
      <button onClick={() => setModalStatus(true)}>Open Modal</button>
      {modalStatus && <Modal setCloseModal={setModalStatus}/>}
      {/* <Modal setModalStatus={setModalStatus} /> */}
      <h1>.............................................................</h1>
      <EvntHandler />
      <h1>..............................................................</h1>
      <h1>Learning Conditional Rendering</h1>
      <ol>
        <li>if else</li>
        <li>element variable</li>
        <li>ternary operator</li>
        <li>Short Circuit Operator</li>
      </ol>
      <h2>Example 1</h2>
      <ConditionalRenderingIFELSE />
      <h1>..............................................................</h1>
      <h1>List and keys</h1>
      <div>
      {name.map((alphabet, index) => 
        <MyName key={index} alpha={alphabet} />
      )}
      </div>
      <h1>..............................................................</h1>
      <h1>Learning Forms</h1>
      <LearningForm />
      <h1>useState Hook</h1>
      <UseStateHook />
      <h1>useEffect Hook </h1>
      <UseEffectHook />
      <h1>Custom Hooks</h1>
      <CustomHooks />

      <h1>PasswordAuthenticator..............................................................</h1>
      <PasswordAuthenticator />

      <h1>.......................................................</h1>
      <FetchAPIData />

      <h1>.......................................................</h1>
      <State />


    </div>
  )
}

export default App;
