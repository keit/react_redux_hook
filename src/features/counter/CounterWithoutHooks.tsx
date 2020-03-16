import React, { useState } from "react";
import { connect } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount
} from "./counterSlice";
import styles from "./Counter.module.css";
import { RootState } from "../../app/store";

function CounterWithoutHooks(props: any) {
  const [incrementAmount, setIncrementAmount] = useState("2");
  const { increment, decrement, incrementByAmount, incrementAsync, count } = props;
  return (
    <div className={styles.withBorder}>
      <p>Counter Without Hooks</p>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => increment()}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => decrement()}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            incrementByAmount(Number(incrementAmount) || 0)
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => incrementAsync(Number(incrementAmount) || 0)}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync
};

function mapStateToProps(state: RootState) {
    return {
      count: selectCount(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterWithoutHooks);
