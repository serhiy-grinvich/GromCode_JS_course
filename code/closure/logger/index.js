'use strict';

/**
 * @return {object}
 */

export const createLogger = () => {
  const logsArray = [];
  function error(text) {
    logsArray.push({ message: text, dateTime: new Date(), type: 'error' });
  }
  function warn(text) {
    logsArray.push({ message: text, dateTime: new Date(), type: 'warn' });
  }
  function log(text) {
    logsArray.push({ message: text, dateTime: new Date(), type: 'log' });
  }
  function getRecords(logType) {
    switch (logType) {
      case 'error':
        return logsArray.filter(el => el.type === 'error').sort((a, b) => b.dateTime - a.dateTime);
      case 'log':
        return logsArray.filter(el => el.type === 'log').sort((a, b) => b.dateTime - a.dateTime);
      case 'warn':
        return logsArray.filter(el => el.type === 'warn').sort((a, b) => b.dateTime - a.dateTime);
      case undefined:
        return logsArray.slice().sort((a, b) => b.dateTime - a.dateTime);
      default:
        return [];
    }
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
};

// examples
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

logger1.getRecords(); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('log'); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('error'); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
logger1.getRecords('warn'); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

const logger2 = createLogger();
logger2.warn('Opps, something is happenning');
logger2.getRecords('error'); // ===> []
logger2.getRecords('warn'); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
logger2.getRecords(); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

const logger3 = createLogger();
logger3.getRecords('error'); // ===> []
logger3.getRecords(); // ===> []

// algo
// -create log memo
// - create methods
// - - create warn function
// - - -   create object with text/date/type
// - - -   add it to log array
// - - create log function
// - - -   create object with text/date/type
// - - -   add it to log array
// - - create error function
// - - -   create object with text/date/type
// - - -   add it to log array
// - - create getRecord function
// - - -  if type - filter messages by type/ sort by date - return
// - - -  if type not found - return [ ];
// - - -  if  ! type -  sort by date - return all
// -return obj with methods
