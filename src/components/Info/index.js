import PropTypes from "prop-types";
import styles from "./info.module.css";

const Info = (props) => {
  return (
    <div className={styles.info}>
      <div className={styles.infoTotal}>
        <p>{`Item Count :${props.todosLength}`}</p>
      </div>
      <div className={styles.infoTotal}>
        <p>{`Total Item :${props.totalCounts}`} </p>
      </div>
      <div className="delete-all">
        <button className={styles.deleteAllBtn} onClick={props.onClick}>
          Delete All
        </button>
      </div>
    </div>
  );
};

Info.propTypes = {
  todosLength: PropTypes.number,
  totalCounts: PropTypes.func,
  onClick: PropTypes.func,
};

export default Info;
