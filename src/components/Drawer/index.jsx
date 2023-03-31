import styles from "./Drawer.module.scss";
function Drawer({ onClickClose, items = [], onRemove }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2>
          Корзина
          <img
            onClick={onClickClose}
            className="cart-remove"
            src="/img/icons/button-remove.svg"
            alt="Remove"
          />
        </h2>
        {items.length > 0 ? (
          <div className={styles.items}>
            {items.map((obj, index__) => (
              <div className={styles.cartItem}>
                <div
                  style={{ backgroundImage: `url(${obj.imageUrl})` }}
                  className={styles.cartItemImg}
                ></div>
                <div className={styles.cartinfo}>
                  <p>{obj.title}</p>
                  <b>{obj.price}</b>
                </div>
                <img
                  onClick={() => onRemove(obj.id)}
                  className={styles.cartremove}
                  src="/img/icons/button-remove.svg"
                  alt="Remove"
                />
              </div>
            ))}
            <div className={styles.totalblock}>
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className={styles.greenButton}>
                Оформить заказ <img src="img/icons/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.cartEmpty}>
            <img
              className={styles.cartEmptyImg}
              src="/img/cart-empty.jpg"
              alt="empty"
            />
            <h2>Корзина пуста</h2>
            <p>Добавьте хотя бы одну пару кроссовок,чтобы сделать заказ.</p>
            <button onClick={onClickClose} className={styles.greenButton}>
              <img
                className={styles.arrowEmpty}
                src="img/icons/arrow.svg"
                alt="arrow"
              />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Drawer;
