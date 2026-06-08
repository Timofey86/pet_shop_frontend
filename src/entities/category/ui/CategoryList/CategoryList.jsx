import cls from './CategoryList.module.scss'
import CategoryCard from "../CategoryCard/CategoryCard.jsx";

const CategoryList = ({categories}) => {
  return (
    <div className={cls.CategoryList}>
        {
            categories.map(category => (
                <CategoryCard key={category.id} category={category} />
            ))
        }
    </div>
  );
};

export default CategoryList;