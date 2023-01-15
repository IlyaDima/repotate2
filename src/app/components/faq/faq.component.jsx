import React from "react";

import "./faq.styles.scss";

const FAQ = () => {
  return (
    <div className="faq">
      <span id="faq"></span>
      <h3 className="faq__heading">F.A.Q</h3>
      <div className="faq__list">
        <details className="faq__list-item">
          <summary>Where Can I Purchase an NFT?</summary>
          <p className="faq__list-item-paragraph">
            You will be able to mint directly from our website in 2023.
          </p>
        </details>
        <details className="faq__list-item">
          <summary>How many NFT`s will be available?</summary>
          <p className="faq__list-item-paragraph">
            “Larry in the Office” supply is 1111 NFT.
          </p>
        </details>
        <details className="faq__list-item">
          <summary>How Much will it Cost?</summary>
          <p className="faq__list-item-paragraph">
            1 “Larry in the office“ Season 1 NFT will cost 0.1 ETH
          </p>
        </details>
        <details className="faq__list-item">
          <summary>How can I get into the whitelist?</summary>
          <p className="faq__list-item-paragraph">
            You can get access to a whitelist by participating in campaigns on
            our Social Media (Twitter, Instagram, Discord).
          </p>
          <p className="faq__list-item-paragraph">
            Check our Discord for more information.
          </p>
        </details>
        <details className="faq__list-item">
          <summary>Which wallets will I be able to use to mint a NFT?</summary>
          <p className="faq__list-item-paragraph">
            We offer a number of wallet connections for minting, but MetaMask is
            the recommended wallet.
          </p>
        </details>
      </div>
    </div>
  );
};

export default FAQ;
