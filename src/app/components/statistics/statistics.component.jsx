import React from 'react';
import environment from '../../../environment/environment';

// import environment from '../../../environment/environment';

import './statistics.styles.scss';

const Statistics = () => {
  /*
  const [daysFromStart, setDaysFromStart] = React.useState();

  React.useEffect(() => {
    const from = new Date('12/28/2021');
    const now = new Date();
    const diff = now.getTime() - from.getTime();

    setDaysFromStart(parseInt(diff / (1000 * 3600 * 24)));
  }, []);
  */

  return (
    <>
      <section className="statistics">
        <div className="statistics__row">
          <a
            className="statistics__icon statistics__icon--discord"
            target="_blank"
            rel="noreferrer"
            href={environment.discord}
          >
            <svg
              width="30"
              height="24"
              viewBox="0 0 30 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.4129 1.94491C23.4709 1.03632 21.3945 0.375996 19.2236 0C18.957 0.482013 18.6455 1.13033 18.4308 1.64607C16.1231 1.29902 13.8367 1.29902 11.5714 1.64607C11.3567 1.13033 11.0382 0.482013 10.7692 0C8.59601 0.375996 6.51719 1.03875 4.57524 1.94973C0.658303 7.86873 -0.403514 13.6407 0.127396 19.3307C2.72531 21.2708 5.24301 22.4493 7.71822 23.2205C8.32936 22.3794 8.87442 21.4853 9.34397 20.543C8.44969 20.2032 7.59316 19.7839 6.78384 19.297C6.99855 19.138 7.20857 18.9717 7.41148 18.8005C12.3477 21.1094 17.7111 21.1094 22.5884 18.8005C22.7937 18.9717 23.0037 19.138 23.2161 19.297C22.4043 19.7862 21.5455 20.2056 20.6512 20.5454C21.1207 21.4853 21.6635 22.3819 22.2769 23.2229C24.7545 22.4517 27.2746 21.2732 29.8725 19.3307C30.4954 12.7346 28.8083 7.01558 25.4129 1.94491ZM10.0165 15.8314C8.53465 15.8314 7.31944 14.4481 7.31944 12.7635C7.31944 11.0789 8.5087 9.69311 10.0165 9.69311C11.5243 9.69311 12.7394 11.0764 12.7135 12.7635C12.7158 14.4481 11.5243 15.8314 10.0165 15.8314ZM17.2864 12.7635C17.2864 14.4481 18.5016 15.8314 19.9834 15.8314C21.4912 15.8314 22.6805 14.4481 22.6805 12.7635C22.7064 11.0764 21.4912 9.69311 19.9834 9.69311C18.4756 9.69311 17.2864 11.0789 17.2864 12.7635Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            className="statistics__icon statistics__icon--twitter"
            target="_blank"
            rel="noreferrer"
            href={environment.twitter}
          >
            <svg
              width="30"
              height="25"
              viewBox="0 0 30 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.3202 2.85857C28.849 3.06758 28.3644 3.244 27.8693 3.38727C28.4554 2.72434 28.9023 1.94434 29.1751 1.0908C29.2363 0.899492 29.1729 0.690078 29.0156 0.564922C28.8586 0.439707 28.6404 0.424707 28.4674 0.527188C27.416 1.1508 26.2816 1.59898 25.0922 1.86102C23.894 0.690254 22.2666 0.0239258 20.5843 0.0239258C17.0332 0.0239258 14.1441 2.91295 14.1441 6.46396C14.1441 6.74363 14.1618 7.02178 14.1968 7.29605C9.79022 6.90916 5.69346 4.74324 2.88026 1.29236C2.78001 1.16937 2.62555 1.10305 2.46741 1.11576C2.30921 1.12813 2.167 1.21736 2.08708 1.35453C1.51649 2.33357 1.21485 3.45336 1.21485 4.59271C1.21485 6.14451 1.76885 7.6168 2.74754 8.76729C2.44995 8.66422 2.1612 8.53543 1.88557 8.38244C1.73762 8.30006 1.55704 8.30135 1.41003 8.38561C1.26295 8.46992 1.17073 8.6249 1.1668 8.79436C1.1661 8.82289 1.1661 8.85143 1.1661 8.88037C1.1661 11.1966 2.41274 13.2821 4.31874 14.4187C4.15497 14.4023 3.99137 14.3786 3.82878 14.3475C3.66114 14.3155 3.48881 14.3742 3.37579 14.5021C3.26258 14.6298 3.22508 14.8079 3.27729 14.9705C3.98276 17.1731 5.79911 18.7931 7.99491 19.2871C6.1737 20.4278 4.09104 21.0253 1.90473 21.0253C1.44852 21.0253 0.989732 20.9985 0.540728 20.9454C0.317662 20.9188 0.104381 21.0505 0.0283846 21.2627C-0.0476115 21.4749 0.032955 21.7115 0.222682 21.8332C3.03137 23.634 6.27899 24.5859 9.61432 24.5859C16.1711 24.5859 20.2729 21.494 22.5592 18.9001C25.4102 15.6658 27.0453 11.3848 27.0453 7.15496C27.0453 6.97824 27.0426 6.79982 27.0371 6.62193C28.1619 5.77449 29.1303 4.74887 29.9183 3.57008C30.0381 3.39107 30.0251 3.15441 29.8864 2.98965C29.7481 2.82459 29.5172 2.77127 29.3202 2.85857Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            className="statistics__icon statistics__icon--instagram"
            target="_blank"
            rel="noreferrer"
            href={environment.instagram}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.1217 0C13.2195 5.67495e-05 13.3144 0.000128867 13.4066 0.000217531L14.3915 0.00215132C15.6265 0.00623007 16.2305 0.0164553 16.8439 0.0386247L17.0618 0.0469546C17.2454 0.0543252 17.4364 0.0627881 17.651 0.0724907C18.9823 0.138116 19.8893 0.345147 20.6862 0.654522C21.5119 0.971709 22.208 1.40296 22.8994 2.09905C23.5948 2.79046 24.0221 3.49046 24.344 4.31233C24.6487 5.10452 24.8604 6.01624 24.926 7.34749C24.9351 7.56196 24.9431 7.75285 24.9502 7.93644L24.9583 8.1543C24.985 8.91184 24.9959 9.6556 24.9982 11.5919L24.9983 13.4046C24.9964 15.3408 24.9873 16.0843 24.9599 16.8419L24.9515 17.0598C24.9442 17.2435 24.9357 17.4345 24.926 17.6491C24.8604 18.9803 24.6494 19.8873 24.344 20.6842C24.0268 21.51 23.5955 22.2061 22.8994 22.8975C22.208 23.5928 21.508 24.0201 20.6862 24.342C19.8893 24.6467 18.9823 24.8584 17.651 24.9241C16.45 24.9749 15.9883 24.9932 13.4066 24.9962L11.5939 24.9963C9.65767 24.9945 8.91424 24.9853 8.15657 24.9579L7.93866 24.9496C7.75501 24.9422 7.56404 24.9338 7.34944 24.9241C6.01819 24.8584 5.11116 24.6475 4.31429 24.342C3.49241 24.0248 2.79241 23.5936 2.10101 22.8975C1.40569 22.2061 0.97835 21.5061 0.656475 20.6842C0.3471 19.8873 0.140069 18.9803 0.0744438 17.6491C0.0290809 16.5767 0.00963099 16.0938 0.00380131 14.165L0.00226978 13.4046C0.00216027 13.3124 0.00207019 13.2175 0.00199876 13.1198L0.00195312 11.8768C0.00200987 11.779 0.00208199 11.6841 0.00217066 11.5919L0.00410444 10.607C0.00818319 9.37199 0.0184084 8.76797 0.0405778 8.15462L0.0489077 7.93671C0.0562784 7.75306 0.0647412 7.56208 0.0744438 7.34749C0.140069 6.01233 0.3471 5.10921 0.656475 4.31233C0.973663 3.49046 1.40491 2.79046 2.10101 2.09905C2.79241 1.40374 3.49241 0.976397 4.31429 0.654522C5.11116 0.345147 6.01429 0.138116 7.34944 0.0724907C8.42177 0.0271278 8.90471 0.00767786 10.8335 0.00184819L11.5939 0.000316659C11.6861 0.000207146 11.781 0.000117066 11.8787 4.56304e-05L13.1217 0ZM12.5002 6.08343C8.95257 6.08343 6.08382 8.95608 6.08382 12.4998C6.08382 16.0475 8.95648 18.9162 12.5002 18.9162C16.0479 18.9162 18.9166 16.0436 18.9166 12.4998C18.9166 8.95218 16.044 6.08343 12.5002 6.08343ZM19.1729 4.32952C18.3471 4.32952 17.6721 5.0014 17.6721 5.82718C17.6721 6.65687 18.3424 7.32796 19.1729 7.32796C19.9994 7.32796 20.6752 6.65765 20.6752 5.82718C20.6752 5.0014 19.9987 4.32952 19.1729 4.32952ZM12.5002 16.6662C10.1971 16.6662 8.33382 14.803 8.33382 12.4998C8.33382 10.1967 10.1971 8.33343 12.5002 8.33343C14.8034 8.33343 16.6666 10.1967 16.6666 12.4998C16.6666 14.803 14.8034 16.6662 12.5002 16.6662Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </section>

      {/*
      <tbody className='statistics__body'>
        <tr className='statistics__row'>
          <td className='statistics__column'>
            <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M25.4129 1.94491C23.4709 1.03632 21.3945 0.375996 19.2236 0C18.957 0.482013 18.6455 1.13033 18.4308 1.64607C16.1231 1.29902 13.8367 1.29902 11.5714 1.64607C11.3567 1.13033 11.0382 0.482013 10.7692 0C8.59601 0.375996 6.51719 1.03875 4.57524 1.94973C0.658303 7.86873 -0.403514 13.6407 0.127396 19.3307C2.72531 21.2708 5.24301 22.4493 7.71822 23.2205C8.32936 22.3794 8.87442 21.4853 9.34397 20.543C8.44969 20.2032 7.59316 19.7839 6.78384 19.297C6.99855 19.138 7.20857 18.9717 7.41148 18.8005C12.3477 21.1094 17.7111 21.1094 22.5884 18.8005C22.7937 18.9717 23.0037 19.138 23.2161 19.297C22.4043 19.7862 21.5455 20.2056 20.6512 20.5454C21.1207 21.4853 21.6635 22.3819 22.2769 23.2229C24.7545 22.4517 27.2746 21.2732 29.8725 19.3307C30.4954 12.7346 28.8083 7.01558 25.4129 1.94491ZM10.0165 15.8314C8.53465 15.8314 7.31944 14.4481 7.31944 12.7635C7.31944 11.0789 8.5087 9.69311 10.0165 9.69311C11.5243 9.69311 12.7394 11.0764 12.7135 12.7635C12.7158 14.4481 11.5243 15.8314 10.0165 15.8314ZM17.2864 12.7635C17.2864 14.4481 18.5016 15.8314 19.9834 15.8314C21.4912 15.8314 22.6805 14.4481 22.6805 12.7635C22.7064 11.0764 21.4912 9.69311 19.9834 9.69311C18.4756 9.69311 17.2864 11.0789 17.2864 12.7635Z" fill="white"/>
            </svg>
            <p className='statistics__value'>36.7K</p>
            <h6 className='statistics__label'>Members</h6>
          </td>
          <td className='statistics__column'>
            <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.3202 2.85857C28.849 3.06758 28.3644 3.244 27.8693 3.38727C28.4554 2.72434 28.9023 1.94434 29.1751 1.0908C29.2363 0.899492 29.1729 0.690078 29.0156 0.564922C28.8586 0.439707 28.6404 0.424707 28.4674 0.527188C27.416 1.1508 26.2816 1.59898 25.0922 1.86102C23.894 0.690254 22.2666 0.0239258 20.5843 0.0239258C17.0332 0.0239258 14.1441 2.91295 14.1441 6.46396C14.1441 6.74363 14.1618 7.02178 14.1968 7.29605C9.79022 6.90916 5.69346 4.74324 2.88026 1.29236C2.78001 1.16937 2.62555 1.10305 2.46741 1.11576C2.30921 1.12813 2.167 1.21736 2.08708 1.35453C1.51649 2.33357 1.21485 3.45336 1.21485 4.59271C1.21485 6.14451 1.76885 7.6168 2.74754 8.76729C2.44995 8.66422 2.1612 8.53543 1.88557 8.38244C1.73762 8.30006 1.55704 8.30135 1.41003 8.38561C1.26295 8.46992 1.17073 8.6249 1.1668 8.79436C1.1661 8.82289 1.1661 8.85143 1.1661 8.88037C1.1661 11.1966 2.41274 13.2821 4.31874 14.4187C4.15497 14.4023 3.99137 14.3786 3.82878 14.3475C3.66114 14.3155 3.48881 14.3742 3.37579 14.5021C3.26258 14.6298 3.22508 14.8079 3.27729 14.9705C3.98276 17.1731 5.79911 18.7931 7.99491 19.2871C6.1737 20.4278 4.09104 21.0253 1.90473 21.0253C1.44852 21.0253 0.989732 20.9985 0.540728 20.9454C0.317662 20.9188 0.104381 21.0505 0.0283846 21.2627C-0.0476115 21.4749 0.032955 21.7115 0.222682 21.8332C3.03137 23.634 6.27899 24.5859 9.61432 24.5859C16.1711 24.5859 20.2729 21.494 22.5592 18.9001C25.4102 15.6658 27.0453 11.3848 27.0453 7.15496C27.0453 6.97824 27.0426 6.79982 27.0371 6.62193C28.1619 5.77449 29.1303 4.74887 29.9183 3.57008C30.0381 3.39107 30.0251 3.15441 29.8864 2.98965C29.7481 2.82459 29.5172 2.77127 29.3202 2.85857Z" fill="white"/>
            </svg>
            <p className='statistics__value'>13.2K</p>
            <h6 className='statistics__label'>Members</h6>
          </td>
        </tr>
        <tr className='statistics__row'>
          <td className='statistics__column'>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.1217 0C13.2195 5.67495e-05 13.3144 0.000128867 13.4066 0.000217531L14.3915 0.00215132C15.6265 0.00623007 16.2305 0.0164553 16.8439 0.0386247L17.0618 0.0469546C17.2454 0.0543252 17.4364 0.0627881 17.651 0.0724907C18.9823 0.138116 19.8893 0.345147 20.6862 0.654522C21.5119 0.971709 22.208 1.40296 22.8994 2.09905C23.5948 2.79046 24.0221 3.49046 24.344 4.31233C24.6487 5.10452 24.8604 6.01624 24.926 7.34749C24.9351 7.56196 24.9431 7.75285 24.9502 7.93644L24.9583 8.1543C24.985 8.91184 24.9959 9.6556 24.9982 11.5919L24.9983 13.4046C24.9964 15.3408 24.9873 16.0843 24.9599 16.8419L24.9515 17.0598C24.9442 17.2435 24.9357 17.4345 24.926 17.6491C24.8604 18.9803 24.6494 19.8873 24.344 20.6842C24.0268 21.51 23.5955 22.2061 22.8994 22.8975C22.208 23.5928 21.508 24.0201 20.6862 24.342C19.8893 24.6467 18.9823 24.8584 17.651 24.9241C16.45 24.9749 15.9883 24.9932 13.4066 24.9962L11.5939 24.9963C9.65767 24.9945 8.91424 24.9853 8.15657 24.9579L7.93866 24.9496C7.75501 24.9422 7.56404 24.9338 7.34944 24.9241C6.01819 24.8584 5.11116 24.6475 4.31429 24.342C3.49241 24.0248 2.79241 23.5936 2.10101 22.8975C1.40569 22.2061 0.97835 21.5061 0.656475 20.6842C0.3471 19.8873 0.140069 18.9803 0.0744438 17.6491C0.0290809 16.5767 0.00963099 16.0938 0.00380131 14.165L0.00226978 13.4046C0.00216027 13.3124 0.00207019 13.2175 0.00199876 13.1198L0.00195312 11.8768C0.00200987 11.779 0.00208199 11.6841 0.00217066 11.5919L0.00410444 10.607C0.00818319 9.37199 0.0184084 8.76797 0.0405778 8.15462L0.0489077 7.93671C0.0562784 7.75306 0.0647412 7.56208 0.0744438 7.34749C0.140069 6.01233 0.3471 5.10921 0.656475 4.31233C0.973663 3.49046 1.40491 2.79046 2.10101 2.09905C2.79241 1.40374 3.49241 0.976397 4.31429 0.654522C5.11116 0.345147 6.01429 0.138116 7.34944 0.0724907C8.42177 0.0271278 8.90471 0.00767786 10.8335 0.00184819L11.5939 0.000316659C11.6861 0.000207146 11.781 0.000117066 11.8787 4.56304e-05L13.1217 0ZM12.5002 6.08343C8.95257 6.08343 6.08382 8.95608 6.08382 12.4998C6.08382 16.0475 8.95648 18.9162 12.5002 18.9162C16.0479 18.9162 18.9166 16.0436 18.9166 12.4998C18.9166 8.95218 16.044 6.08343 12.5002 6.08343ZM19.1729 4.32952C18.3471 4.32952 17.6721 5.0014 17.6721 5.82718C17.6721 6.65687 18.3424 7.32796 19.1729 7.32796C19.9994 7.32796 20.6752 6.65765 20.6752 5.82718C20.6752 5.0014 19.9987 4.32952 19.1729 4.32952ZM12.5002 16.6662C10.1971 16.6662 8.33382 14.803 8.33382 12.4998C8.33382 10.1967 10.1971 8.33343 12.5002 8.33343C14.8034 8.33343 16.6666 10.1967 16.6666 12.4998C16.6666 14.803 14.8034 16.6662 12.5002 16.6662Z" fill="white"/>
            </svg>
            <p className='statistics__value'>3.45K</p>
            <h6 className='statistics__label'>Members</h6>
          </td>
          <td className='statistics__column'>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M30.2879 16.101C35.7939 10.5951 42.5398 6.48851 49.959 4.12578L61.9363 0.311403C63.0154 -0.0322796 64.0323 0.984653 63.6886 2.06369L59.8743 14.0418C57.5115 21.4609 53.405 28.2061 47.899 33.7121L42.9244 38.6867C43.5758 46.0586 40.9287 53.3408 35.6958 58.5737L30.7819 63.4876C30.2315 64.038 29.2879 63.6958 29.2195 62.9195L28.3649 53.2463L25.2385 50.1199L22.9859 54.2865C22.4086 55.3549 20.9647 55.5652 20.1059 54.7064L9.29366 43.8941C8.4348 43.0353 8.6451 41.5921 9.71355 41.0141L13.8801 38.7615L10.7538 35.6352L1.08056 34.7806C0.304278 34.7121 -0.0379928 33.7686 0.512464 33.2181L5.42635 28.3042C10.6592 23.0707 17.9415 20.4242 25.3133 21.0756L30.2879 16.101ZM41.8405 22.1589C43.815 24.1335 47.0162 24.1335 48.9907 22.1589C50.9653 20.185 50.9653 16.9832 48.9907 15.0086C47.0162 13.034 43.815 13.034 41.8405 15.0086C39.8659 16.9832 39.8659 20.1843 41.8405 22.1589Z" fill="white"/>
            </svg>
            <p className='statistics__value'>{daysFromStart}</p>
            <h6 className='statistics__label'>Days</h6>
          </td>
        </tr>
      </tbody>
      */}
    </>
  );
};

export default Statistics;
