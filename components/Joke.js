import React from 'react';
import PropTypes from 'prop-types';

function Joke({ joke }) {
  return (
    <>
      <h1>{joke.setup}</h1>
      <h2>{joke.delivery}</h2>
    </>
  );
}

Joke.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    delivery: PropTypes.string,
  }).isRequired,
};

export default Joke;
