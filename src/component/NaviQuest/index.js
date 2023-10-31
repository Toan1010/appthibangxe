import styles from "./NaviQuest.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function NaviQuest({ numQuests }) {
  console.log(numQuests);
  const buttonElements = [];
  for (let i = 1; i <= numQuests; i++) {
    buttonElements.push(
      <button key={i} className={` ${cx("naviButt")}  `}>
        <a href={`#quest${i}`}>{i}</a>
      </button>
    );
  }
  return <div className={cx("container")}>{buttonElements}</div>;
}
export default NaviQuest;
