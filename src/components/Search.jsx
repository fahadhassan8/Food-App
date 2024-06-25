import { useEffect, useState } from 'react';
import styles from './Search.module.css';

const URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY1 = 'def97cadf9ec4c54832774cfd3c2d5f3';
const API_KEY2 = 'aacac4f1a7ed4f929d412ac6ec4e84ba';
const API_KEY3 = "0a19245b849848b589a7a4fc230d094d";

export default function Search({ setFoodData }) {
  const [query, setQuery] = useState('pizza');
// syntax of useEffect hook
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY3}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results); // Ensure it's an array
    }
    fetchFood();
  }, [query, setFoodData]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
