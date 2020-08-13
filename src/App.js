import React, { Component } from 'react';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";
import Chatbot from "react-chatbot-kit";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
