import React, { useState } from "react";

// Definição do tipo para o Produto
type Product = {
  id: number;
  name: string;
  price: number;
};

// Componente principal
const ProductList: React.FC = () => {
  // Estado inicial com alguns produtos
  const initialProducts: Product[] = [
    { id: 1, name: "Produto 1", price: 29.99 },
    { id: 2, name: "Produto 2", price: 49.99 },
    { id: 3, name: "Produto 3", price: 19.99 },
  ];

  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [hasMore, setHasMore] = useState<boolean>(true);

  // Função para simular o carregamento de mais produtos
  const loadMoreProducts = () => {
    const newProducts: Product[] = [
      { id: 4, name: "Produto 4", price: 59.99 },
      { id: 5, name: "Produto 5", price: 39.99 },
      { id: 6, name: "Produto 6", price: 89.99 },
    ];

    // Atualiza a lista de produtos
    setProducts((prevProducts) => [...prevProducts, ...newProducts]);

    // Simula a condição para parar de carregar mais produtos
    if (products.length + newProducts.length >= 6) {
      setHasMore(false);
    }
  };

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price.toFixed(2)}
          </li>
        ))}
      </ul>
      {hasMore && (
        <button onClick={loadMoreProducts}>Carregar mais produtos</button>
      )}
    </div>
  );
};

export default ProductList;
