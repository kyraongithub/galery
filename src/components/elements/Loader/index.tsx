import cn from "classnames";
import styles from "./Loader.module.scss";
import { Props } from "./type.type";

const Loader = (props: Props) => {
  const { big, white } = props;

  return (
    <div
      className={cn(
        styles.loader,
        { [styles.big]: big },
        { [styles.white]: white }
      )}
    ></div>
  );
};

export default Loader;
