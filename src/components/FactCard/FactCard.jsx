import React, { useState } from 'react';
import styles from './FactCard.module.scss';

// import { fetchCatFacts } from '../../services/catfacts.service';

const FactCard = () => {

  const [facts, setFacts] = useState([""]); 

  const fetchCatFacts = () => {
    fetch('https://catfact.ninja/fact')
      .then((response) => response.json())
      .then((jsonResponse) => {
        const fact = jsonResponse.fact;
        const factArr = facts.slice();
        factArr.push(fact);
        setFacts(factArr);
      })
      .catch((error) => {
        console.error(error);
      });
  };
    return (

      <div>
        <section className={styles.card}>
        <button className={styles.button} onClick={fetchCatFacts}>Click Here For Cat Facts!</button>
          <ul className={styles.list}>
            {facts.map(fact => <li>{fact}</li>)}
          </ul>
        </section>        
      </div>
    
    )
}

export default FactCard