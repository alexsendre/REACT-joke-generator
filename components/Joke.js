import React from 'react';
import PropTypes from 'prop-types';

function Joke({ joke, btnText }) {
  return (
    <>
      <h1 className="mb-4">{joke.setup}</h1>
      <p className="mb-5">{btnText !== 'Punchline' ? joke.delivery : ''}</p>
    </>
  );
}

Joke.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    delivery: PropTypes.string,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};

export default Joke;
