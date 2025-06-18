import React, { useEffect, useState } from "react";

function SoldProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/admin/sold-products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка данных...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <h2>Проданные инструменты</h2>
      {products.length === 0 ? (
        <p>Нет проданных инструментов.</p>
      ) : (
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead>
            <tr>
              <th>Название инструмента</th>
              <th>Количество продано</th>
            </tr>
          </thead>
          <tbody>
            {products.map(({ id, title, total_sold }) => (
              <tr key={id}>
                <td>{title}</td>
                <td>{total_sold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SoldProducts;
