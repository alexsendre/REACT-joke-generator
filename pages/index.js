import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Joke from '../components/Joke';
import getJoke from '../api/jokeData';

function Home() {
  const [joke, setJoke] = useState({});
  const [btnText, setBtnText] = useState('Get a Joke');

  const setButton = (text) => {
    setBtnText(text);
  };

  const gatherJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        delivery: obj.delivery,
      });

      setButton('Get Punchline');
    });
  };

  useEffect(() => {}, []);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '60vh',
        padding: '30px',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <Joke joke={joke} btnText={btnText} />
      {btnText === 'Get a Joke' || btnText === 'Get Another Joke' ? (
        <Button type="button" onClick={gatherJoke}>
          {btnText}
        </Button>
      ) : (
        <Button type="button" onClick={() => setButton('Get Another Joke')}>
          {btnText}
        </Button>
      )}
    </div>
  );
}

export default Home;
