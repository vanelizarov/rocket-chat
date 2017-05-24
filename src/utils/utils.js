import Moment from 'moment';

export const formatBillDate = (ms) => Moment(ms).format('DD.MM.YYYY\xa0|\xa0HH:mm');
export const formatStdDate = (ms) => Moment(ms).format('DD.MM.YYYY');
export const isSameDay = (ms1, ms2) => Moment(ms1).isSame(ms2, 'day');

export const formatMoney = (sum, addSign = true, currency = '₽') => `${ addSign ? sum >= 0 ? '+\xa0' : '-\xa0' : '' }${ Math.abs(sum).toLocaleString().replace(/,/g, ' ') }\xa0${ currency }`;
