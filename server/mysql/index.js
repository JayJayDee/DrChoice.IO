import { Sequelize } from 'sequelize';

import { cfgMandantory, cfgOptional } from '../configurator';
import { logger } from '../logger';

const MYSQL_HOST = cfgMandantory('MYSQL_HOST');
const MYSQL_USER = cfgMandantory('MYSQL_USER');
const MYSQL_PASSWORD = cfgMandantory('MYSQL_PASSWORD');
const MYSQL_PORT = cfgOptional('MYSQL_PORT', 3306);
const MYSQL_DATABASE = cfgMandantory('MYSQL_DATABASE');

const log = logger({ tag: 'mysql-connector' });

/**
 * initialize MySQL connection
 */
export const initMySQLConnection =
  async () => {
    log.info(`establishing mysql connection ... host: ${MYSQL_HOST}`);
    const sequelize = new Sequelize({
      host: MYSQL_HOST,
      port: MYSQL_PORT,
      username: MYSQL_USER,
      password: MYSQL_PASSWORD,
      database: MYSQL_DATABASE,
      dialect: 'mysql'
    });
    await sequelize.authenticate();
    log.info('mysql connection ok!');
    return sequelize;
  };
