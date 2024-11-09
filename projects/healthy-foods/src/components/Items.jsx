import styles from "./Item.module.css";

const Items = ({ Item, bought, handleBuyButton }) => {
  return (
    <li className={`list-group-item ${bought && `active`}`}>
      <span className={styles.itemSpan}>{Item}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Items;
