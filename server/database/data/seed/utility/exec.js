/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */

exports.exec = (fn, num) => {
  fn();
  if (!num) return;
  --num;
  exec(fn, num);
};
