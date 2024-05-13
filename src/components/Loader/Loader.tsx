import { ThreeDots } from 'react-loader-spinner'
import css from "./Loader.module.css"

export const Loader = () => {
  return <div className={css.loader}>
        <ThreeDots
  visible={true}
  height="20"
  width="50"
  color="rgba(183, 230, 255)"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  </div>;
};