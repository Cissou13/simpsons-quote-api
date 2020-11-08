import React from 'react';

function QuoteCard({ simpsonQuote }) {
  // const { image, character, quote } = this.props.simpsonQuote;
  return (
    <figure className='QuoteCard'>
      <img src={simpsonQuote.image} alt={simpsonQuote.character} />
      <figcaption>
        <blockquote>{simpsonQuote.quote}</blockquote>
        <p>
          <cite>{simpsonQuote.character}</cite>
        </p>
      </figcaption>
    </figure>
  );
}

export default QuoteCard;
