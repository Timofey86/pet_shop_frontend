import cls from './SectionError.module.scss'

const SectionError = ({message}) => {
  return (
    <p className={cls.SectionError}>
        {message ?? 'Something went wrong'}
    </p>
  );
};

export default SectionError;