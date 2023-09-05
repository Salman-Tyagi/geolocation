import { useState } from 'react';

export function useGeoLocation() {
  const [position, setPosition] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function getPositionHandler() {
    if (!navigator.geolocation)
      return setError('Your browser does not support location access');

    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      position => {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setIsLoading(false);
      },
      err => {
        setError(err.message);
        setIsLoading(false);
      }
    );
  }

  return { position, isLoading, error, getPositionHandler };
}
