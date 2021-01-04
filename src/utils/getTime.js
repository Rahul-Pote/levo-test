const options = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

/**
 * @desc Get time from timestamp
 * @param {string} timestamp
 * @example  ('2018-09-12T11:47:29.086+00:00') => 'Sep 12, 2018'
 */

const getTime = (date) => new Date(date).toLocaleDateString('en-US', options);

export default getTime;
