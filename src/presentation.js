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
          <Heading size={2} textColor="primary">
            React
          </Heading>
          <Heading size={4} textColor="secondary" fit>
            A javascript library for building user interfaces
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={4} textColor="primary" fit>jQuery is <strong>imperative</strong> (How to do something)</Heading>
          <Heading size={2} textColor="tertiary" fit>React is <strong>declarative</strong> (What to do)</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} textColor="secondary" fit>
            React is Component Based
          </Heading>
          <Image src='component-based.png' />
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
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={6}  textColor="primary" fit>formidable.com/open-source/victory/</Heading>
          <Image src='Visualizations.png' />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} textColor="secondary">Project demos</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Image src="in-demand-jobs.png" height="560px" />
          <Text size={1} fit textColor="primary">StackOverflow report - Developer Hiring Trends in 2017</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="primary">
          <Heading size={1} fit>Time for In-Class Coding Examples</Heading>
          <Link href="http://codesandbox.io/s/new">codesandbox.io/s/new</Link>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={1}>Lets build a real react app</Heading>
        </Slide>
      </Deck>
    );
  }
}
