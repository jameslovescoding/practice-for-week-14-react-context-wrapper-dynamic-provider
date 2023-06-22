import { createContext, useState } from 'react';
import horoscopesObj from '../data/horoscopes';

const HoroscopeProvider = (props) => {

  const [currentSign, setCurrentSign] = useState('Leo');

  const sign = horoscopesObj[currentSign];

  return (
    <HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
};

export default HoroscopeProvider;

export const HoroscopeContext = createContext();