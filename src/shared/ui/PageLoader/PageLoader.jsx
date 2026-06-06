import cls from './PageLoader.module.css'

const PageLoader = () => {
  return (
    <div className={cls.loaderWrap}>
      <span className={cls.loader} />
    </div>
  )
}

export default PageLoader