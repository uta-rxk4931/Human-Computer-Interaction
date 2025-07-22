import { getMushroomDetails } from '../data/development';
import styles from '../styles/FastFact.module.css';

const MushroomFastFacts = () => {
  const mushroom = getMushroomDetails("death-cap");

  if (!mushroom) return <div>No mushroom data found.</div>;

  const { fastFacts } = mushroom;

  return (
    <div className={styles.fastFactsContainer}>
      <h2>Fast Facts</h2>
      <p>Cap Diameter: {fastFacts.capDiameter}</p>
      <p>Gill Color: {fastFacts.gillColor}</p>
      <p>Stem Color: {fastFacts.stemColor}</p>
      <p>Habitat: {fastFacts.habitat}</p>
    </div>
  );
};

export default MushroomFastFacts;