import { useEffect, useState } from 'react';
import data from './beersData';
import getStatus from './temperature';

const BeerList = () => {
  const [items, setItems] = useState({});

  useEffect(() => {
    const request = () =>
      data.forEach((product) => {
        fetch(`http://localhost:8081/temperature/${product.id}`)
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setItems((prevItems) => ({
              ...prevItems,
              [product.id]: {
                ...product,
                ...response,
              },
            }));
          });
      });

    setInterval(request, 5000);

    request();
  }, []);

  return (
    <>
      <h2>Beers</h2>
      <table>
        <thead>
          <tr>
            <th align="left">Product</th>
            <th align="left">Temperature</th>
            <th align="left">Status</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(items).map((itemKey) => (
            <tr key={items[itemKey].id} id={'beer_' + items[itemKey].id}>
              <td width={150}>{items[itemKey].name}</td>
              <td width={150}>{items[itemKey].temperature}</td>
              <td width={150}>
                <span>
                  {getStatus(
                    items[itemKey].temperature,
                    items[itemKey].minimumTemperature,
                    items[itemKey].maximumTemperature
                  )}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BeerList;
