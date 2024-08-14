import { FC } from "react";
import { useParams } from "react-router-dom";
import { useCategory } from "./useCategory";

const Category: FC = () => {
  const { id } = useParams();
  const { categories } = useCategory();

  return (
    <>
      <h1>Category {id}</h1>

      <div>
        {categories.map((props) => (
          <div key={props.id}>{props.name}</div>
        ))}
      </div>
    </>
  );
};

export default Category;
