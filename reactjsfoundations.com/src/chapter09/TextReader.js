import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class TextReader extends Component {
  constructor(props) {
    super(props);
    this.textView = React.createRef();
  }

  componentDidMount() {
    this.textView.current.focus();
  }

  render() {
    return (
      <>
        <textarea
          style={{ width: '380px', height: '400px' }}
          ref={this.textView}
          value={this.props.bookText}
        />
        <SyntaxHighlighter language="javascript" style={github}>
          {`import React,{Component} from 'react';

class TextReader extends Component {
  
  constructor(props) {
    super(props);
    this.textView = React.createRef();
  }
    
  componentDidMount(){
    this.textView.current.focus();
  }

  render(){
    return (
        <textarea style={{width:'380px',height:'400px'}} ref={this.textView} value={this.props.bookText} />
      );
  }

}

export default TextReader;`}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default TextReader;
