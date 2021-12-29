import { useState, useEffect } from 'react';
import config from '../../config';
import { Pets as DogIcon } from '@material-ui/icons';
import Layout from '../shared/styles/layout';

export default function DogFacts() {
  const [facts, setFacts] = useState([]);

  function getDogFacts() {
    fetch(config.endpoints.DOGFACTS)
      .then((res) => res.json())
      .then((data) => {
        setFacts(data.facts);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getDogFacts();
  }, []);

  return (
    <Layout>
      <h2><DogIcon /> Dog Facts</h2>
      <ul>
        {
          facts.map((fact: string, index: number) => (
            <li key={index}>{fact}</li>
          ))
        }
      </ul>
    </Layout>
  );
}
