import React, { useState } from 'react';

import './faq.styles.scss';

import paperImg from '/src/assets/faq/paper.webp';

const answer1 = 'You will be able to mint directly from our website in 2023.';
const answer2 = '“Larry in the Office” supply is 1111 NFT.';
const answer3 = 'x1 “Larry in the office“ Season 1 NFT will cost 0.1 ETH';
const answer4 = `You can get access to a whitelist by participating in campaigns on our Social Media (Twitter, Instagram, Discord).


Check our Discord for more information.`;
const answer5 =
  'We offer a number of wallet connections for minting, but MetaMask is the recommended wallet.';

export default function FAQ() {
  const [answer, setAnswer] = useState('Select the question from the list...');

  return (
    <section className="faq">
      <div className="faq__questions">
        <img
          className="faq__img"
          src={paperImg}
          width={576}
          height={917}
          alt="A hand holding a piece of paper with questions"
        />

        <button
          onClick={() => setAnswer(answer1)}
          className="faq__question faq__question--first"
        >
          Where Can I Purchase an NFT?
        </button>
        <button
          onClick={() => setAnswer(answer2)}
          className="faq__question faq__question--second"
        >
          How many NFT`s will be available?
        </button>
        <button
          onClick={() => setAnswer(answer3)}
          className="faq__question faq__question--third"
        >
          How Much will it Cost?
        </button>
        <button
          onClick={() => setAnswer(answer4)}
          className="faq__question faq__question--fourth"
        >
          How can I get into the whitelist?
        </button>
        <button
          onClick={() => setAnswer(answer5)}
          className="faq__question faq__question--fifth"
        >
          Which wallets will I be able to use to mint a NFT?
        </button>
      </div>
      <div className="faq__answer">
        <p className="faq__answer-text">{answer}</p>
      </div>
    </section>
  );
}
