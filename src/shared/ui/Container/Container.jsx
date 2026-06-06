import cls from './Container.module.scss'

const Container = ({children}) => {
  return (
    <div className={cls.Container}>
        {children}
    </div>
  );
};

export default Container;