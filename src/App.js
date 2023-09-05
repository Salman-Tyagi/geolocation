import { useState } from 'react';
import { useGeoLocation } from './useGeoLocation';

export default function App() {
  const [count, setCount] = useState(0);
  const { isLoading, position, error, getPositionHandler } = useGeoLocation();

  const { lat, lng } = position;

  function clickHandler() {
    setCount(c => c + 1);
    getPositionHandler();
  }

  return (
    <div>
      <button onClick={clickHandler} disabled={isLoading}>
        Get my position
      </button>
      {isLoading && <p>Getting position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <span>
          <p>
            Your GPS position:
            <a
              target='blank'
              href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
            >{`${lat}, ${lng}`}</a>
          </p>
          <p>You requested position {count} times</p>
        </span>
      )}
    </div>
  );
}
