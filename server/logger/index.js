import moment from 'moment';
import 'moment-timezone';

const makeLog = (args, tag, subTag) =>
  [`${moment().tz('Asia/Seoul').format('YYYY-MM-DD hh:mm:ss')} [${tag}${subTag ? `/${subTag}` : ''}]`, ...args];

export const logger =
  ({ tag, subTag }) =>

    ({
      debug: (...args) => console.debug(...makeLog(args, tag, subTag)),
      info: (...args) => console.info(...makeLog(args, tag, subTag)),
      error: (...args) => console.error(...makeLog(args, tag, subTag))
    });
