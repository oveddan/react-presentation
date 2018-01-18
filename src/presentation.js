// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);


const HelloWorld = `ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);`


const EmbeddingExpressions = `function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
`;

const JsxIsExpression = `function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
`

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Creating Highly Interactive Web Applications
          </Heading>
          <Heading size={1} fit lineHeight={1} textColor="tertiary">
            with React
          </Heading>
          <Text textColor="secondary" size={1} fit bold>
            by Dan Oved and Barak Chamo for ITP Unconference 2018
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} textColor="primary" caps>
            What is React?
          </Heading>
          <List>
            <ListItem>highly interactive single page applications</ListItem>
            <ListItem>Single-directional data flow</ListItem>
            <ListItem>Fast and scales well</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>Who uses it?</Heading>
          <List size={4}>
            <ListItem>AirBNB</ListItem>
            <ListItem>Facebook (partially)</ListItem>
            <ListItem>Instagram (completely)</ListItem>
            <ListItem>Amazon Video</ListItem>
            <ListItem>Asana</ListItem>
            <ListItem>Bitly</ListItem>
            <ListItem>Codeacademy</ListItem>
            <ListItem>Disqus</ListItem>
            <ListItem>Netflix</ListItem>
            <ListItem>Squarespace</ListItem>
            <ListItem>Whatsapp for Web</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4}  textColor="primary" caps>What else can it be used for?</Heading>
          <List>
            <ListItem>App development (ReactNative)</ListItem>
            <ListItem>WebGL/ThreeJS (ReactThree, gl-react)</ListItem>
            <ListItem>VR (React VR)</ListItem>
            <ListItem>Maps (Uber's react-map-gl)</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} textColor="secondary">Project demos</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Image src="in-demand-jobs.png" height="560px" />
          <Text size={1} fit textColor="primary">StackOverflow report - Developer Hiring Trends in 2017</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="primary">
          <Heading size={4}>Hello World</Heading>
          <CodePane
            lang="jsx"
            source={HelloWorld}
            overflow = "overflow"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="primary">
          <Heading size={6}>Introducing JSX</Heading>
          <CodePane
            lang="jsx"
            source="const element = <h1>Hello, world!</h1>;"
            style={{margin: "20px 0", fontSize: '0.6em'}}
            overflow = "overflow"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="primary">
          <Heading size={6}>Embedding Expressions</Heading>
          <Link href='https://reactjs.org/redirect-to-codepen/introducing-jsx' target="_blank">
            <CodePane
              lang="jsx"
              style={{margin: "20px 0", fontSize: '0.5em'}}
              source={EmbeddingExpressions}
              overflow = "overflow"
            />
          </Link>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="primary">
          <Heading size={6}>Jsx is an Expression Too</Heading>
          <CodePane
            lang="jsx"
            style={{margin: "20px 0", fontSize: '0.6em'}}
            source={JsxIsExpression}
            overflow = "overflow"
          />
        </Slide>
      </Deck>
    );
  }
}
