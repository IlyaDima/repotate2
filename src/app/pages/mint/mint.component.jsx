/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './mint.styles.scss';

import Header from '../../components/header/header.component';
import { getTotalSupply, mintMod, mintOG, mintPublic, mintRaffle, mintWL } from '../../../contract/ethereum';
import Wallet from '../../components/header/wallet/wallet.component';
import Social from '../../components/header/social/social.component';

const MintPageComponent = ({
  currentAccount,
  setCurrentAccount,
  publicActive,
  presaleActive,
  raffleActive,
  mintType,
  mintProof,
  raffleSuccessMessage,
  isProofLoading,
  callPublic,
  callRaffle,
  callWl,
  callMod,
  callOg,
}) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    getTotalSupply().then(setMintedCount);
  }, []);

  React.useEffect(() => {
    if (currentAccount) {
      setMintError(null);
    }
  }, [currentAccount]);

  React.useEffect(() => {
    if (publicActive !== undefined && presaleActive !== undefined && raffleActive !== undefined) {
      if (!publicActive && !presaleActive && !raffleActive) {
        // navigate('/');
      }
    }
  }, [publicActive, presaleActive, raffleActive]);

  const [mintedCount, setMintedCount] = useState(0);
  const [selectedCount, setSelectedCount] = useState(1);
  const [mintError, setMintError] = useState();
  const [successTx, setSuccessTx] = useState();

  const getPrice = () => {
    const num = mintType === 'ogPresaleMint'
      ? 0.10 * selectedCount
      : 0.10 * selectedCount;

    const numString = num.toFixed(2).replace('.', ',');

    if (mintType === 'ogPresaleMint') return `${numString} ETH (OG)`;

    return `${numString} ETH`;
  };

  const setCount = (newCount) => {
    if (newCount === 0) return;

    if (mintType === 'ogPresaleMint' && newCount > 3) return;

    if (newCount > 2 && mintType !== 'ogPresaleMint') return;

    setSelectedCount(newCount);
  };

  const onMintClick = async (count) => {
    try {
      setMintError(null);
      setSuccessTx(null);

      if (publicActive) {
        await callPublic(count)
          .then(tx => setSuccessTx(tx));
      } else if (raffleActive && mintProof) {
        if (mintType === 'raffleMint') {
          await callRaffle(count, mintProof)
            .then(tx => setSuccessTx(tx));
        }
      } else if (presaleActive && mintProof) {
        if (mintType === 'modMint') {
          await callMod(count, mintProof)
            .then(tx => setSuccessTx(tx));
        }

        if (mintType === 'ogPresaleMint') {
          await callOg(count, mintProof)
            .then(tx => setSuccessTx(tx));
        }

        if (mintType === 'presaleMint') {
          await callWl(count, mintProof)
            .then(tx => setSuccessTx(tx));
        }
      }
    } catch (err) {
      setMintError(err.message);
    }
  };

  const getMintName = () => {
    if (publicActive) return 'PUBLIC MINT';
    if (presaleActive) return 'PRESALE MINT';
    if (raffleActive) return 'RAFFLE MINT';

    return null;
  };

  const renderActions = () => {
    if (!currentAccount) {
      return (
        <Wallet
          currentAccount={currentAccount}
          setCurrentAccount={setCurrentAccount}
        />
      );
    }

    if (currentAccount && isProofLoading) {
      return (
        <Wallet
          currentAccount={currentAccount}
          setCurrentAccount={setCurrentAccount}
          loading={isProofLoading}
        />
      );
    }

    if (presaleActive && !mintProof) {
      return (
        <div className='mint-page__not-wl'>
          Selected address is not eligible for presale mint. Please wait till the next mint phase.
        </div>
      );
    }

    if (raffleActive && !mintProof) {
      return (
        <div className='mint-page__not-raffle'>
          Selected address is not eligible for raffle mint. Please wait till the next mint phase.
        </div>
      );
    }

    return (
      <div className='mint-page__actions'>
        <h5>PRICE</h5>
        <p>{getPrice()}</p>
        <div className='mint-page__num'>
          <div
            className='mint-page__num-button'
            onClick={() => setCount(selectedCount - 1)}
          >
            -
          </div>
          <div className='mint-page__num-button mint-page__num-button-off'>
            {selectedCount}
          </div>
          <div
            className='mint-page__num-button'
            onClick={() => setCount(selectedCount + 1)}
          >
            +
          </div>
        </div>
        <button
          className='mint-page__buy'
          onClick={() => onMintClick(selectedCount)}
        >
          <h6 className='mint-page__buy-name'>MINT</h6>
        </button>
      </div>
    );
  };

  const renderRaffleMessage = () => {
    if (!raffleSuccessMessage) return null;

    return (
      <div className='mint-page__raffle-added'>
        {raffleSuccessMessage}
      </div>
    );
  };

  return (
    <section className='mint-page'>
      <Header
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
      />
      <div className='mint-page__wrapper'>
        <img className='mint-page__live' src="minlive.png" />
        <div className="mint-page__box">
          <img src="kek1.png" className='mint-page__kek1' />
          <img src="kek3.png" className='mint-page__kek3' />
          <div className="mint-page__box-left">
            <img src="kek2.png" className='mint-page__kek2' />
            <img src='mint1.png' />
          </div>
          <div className="mint-page__box-right">
            <div className='mint-page__count'>
              <p>{mintedCount}/<span>1111</span></p>
            </div>
            {renderRaffleMessage()}
            {renderActions()}
            {
              mintError
                ? (
                  <div className='mint-page__error'>
                    {mintError}
                  </div>
                )
                : null
            }
            {
              successTx
                ? (
                  <div className='mint-page__success'>
                    Transaction in progress! Click <a href={`https://etherscan.io/tx/${successTx}`} target='_blank' rel='noreferrer'>here</a> to view on Etherscan.
                  </div>
                )
                : null
            }
          </div>
        </div>
        <div className="mint-page__social">
          <Social />
        </div>
      </div>
    </section>
  );
};

MintPageComponent.propTypes = {
  isProofLoading: PropTypes.bool,
  raffleSuccessMessage: PropTypes.string,
  currentAccount: PropTypes.string,
  setCurrentAccount: PropTypes.func,
  raffleActive: PropTypes.bool,
  publicActive: PropTypes.bool,
  presaleActive: PropTypes.bool,
  mintType: PropTypes.string,
  mintProof: PropTypes.arrayOf(PropTypes.string),
  errorMessage: PropTypes.string,
};

export default MintPageComponent;
