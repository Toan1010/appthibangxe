import styles from "./NaviQuest.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function NaviQuest({ numQuests }) {
  console.log(numQuests);
  const liElements = [];
  for (let i = 1; i <= numQuests; i++) {
    liElements.push(
      <li key={i}>
        <a href={`#quest${i}`}>{i}</a>
      </li>
    );
  }
  return <div className={cx("container")}>
    <ul>
        {liElements}
    </ul>
  </div>;
}
export default NaviQuest;
