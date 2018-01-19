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
            <ListItem>Is an application framework</ListItem>
            <ListItem>Declarative</ListItem>
            <ListItem>Component based</ListItem>
            <ListItem>Uni-directional data flow</ListItem>
            <ListItem>Fast and scales well</ListItem>
            <ListItem>JSX and Virtual Dom</ListItem>
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
        <Slide transition={['fade']} bgColor="primary" textColor="primary">
          <Heading size={4}>Updating a rendered element</Heading>
          <List>
            <ListItem><Link href='https://reactjs.org/redirect-to-codepen/rendering-elements/update-rendered-element'>Basic update example</Link></ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="primary">
          <Heading size={1}>Components and Props</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="primary">
          <Heading size={4}>Components</Heading>
          <Heading size={6}>Functional:</Heading>
          <CodePane
            lang="jsx"
            style={{margin: "20px 0", fontSize: '0.6em'}}
            source={`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`
            }
            overflow = "overflow"
          />
          <Heading size={6}>Class:</Heading>
          <CodePane
            lang="jsx"
            style={{margin: "20px 0", fontSize: '0.6em'}}
            source={`class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`
            }
            overflow = "overflow"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="primary">
          <Heading size={4}>Rendering Components</Heading>
          <CodePane
            lang="jsx"
            style={{margin: "20px 0", fontSize: '0.6em'}}
            source={`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);`
            }
            overflow = "overflow"
          />
          <Link href='https://reactjs.org/redirect-to-codepen/components-and-props/rendering-a-component'>Try on Codepen, and Compose App with List of Welcomes</Link>

        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="primary">
          <Heading size={4}>Extracting Components</Heading>
          <CodePane
            lang="jsx"
            style={{margin: "20px 0", fontSize: '0.6em'}}
            source={`function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}`
            }
            overflow = "overflow"
          />
          <Link href='https://reactjs.org/redirect-to-codepen/components-and-props/extracting-components'>Let's do a live component extraction demo</Link>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="tertiary">Props are <strong>Read-Only</strong></Heading>
          <Heading size={4} textColor="primary">Never modify them in a child component</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="primary">
          <Heading size={4}>State and Props</Heading>
          <Link href='http://codepen.io/gaearon/pen/gwoJZk?editors=0010'>Let's convert this clock to do it the React way</Link>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="primary">
          <Heading size={4}>Handling Events</Heading>
          <Heading size={2}>This is where I left off</Heading>
        </Slide>
      </Deck>
    );
  }
}
