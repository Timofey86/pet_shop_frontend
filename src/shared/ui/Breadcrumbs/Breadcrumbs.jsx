import cls from './Breadcrumbs.module.scss'
import {Link} from "react-router-dom";

const Breadcrumbs = ( {items}) => {
  return (
    <div className={cls.Breadcrumbs}>
        {items.map((item, index) => (
        <div key={index} className={cls.item}>
            {item.to ? (
                <Link to={item.to} className={cls.link}>
                    {item.label}
                </Link>
            ) : (
                <span className={cls.current}>
              {item.label}
            </span>
            )}

            {index !== items.length - 1 && (
                <div className={cls.line} />
            )}
        </div>
        ))}
    </div>
  );
};

export default Breadcrumbs;