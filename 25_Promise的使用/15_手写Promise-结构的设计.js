const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FUFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

class HYPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledFns = [];
    this.onRejectedFns = [];

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_FUFILLED;
        //微任务
        queueMicrotask(() => {
          this.value = value;
          this.onFulfilled(this.value);
        });
      }
    };
    const reject = () => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED;
        //微任务
        queueMicrotask(() => {
          this.value = reason;
          this.onRejected(this.reason);
        });
      }
    };
    executor(resolve, reject);
  }

  //promise对象then方法
  then(onFulfilled, onRejected) {
    this.onFulfilled = onFulfilled;
    this.onRejected = onRejected;
  }
}

const promise = new HYPromise((resolve, reject) => {
  resolve(111);
});

promise.then((result) => {}).catch((err) => {});
