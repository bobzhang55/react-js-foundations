import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Joke = (props) => {
  const jokes = [
    'Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them.',
    'What sound does a limping turkey make? Gobble Gobble.',
  ];
  return jokes[props.id];
};
export default Joke;
