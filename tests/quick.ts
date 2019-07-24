/* This file is used to quickly test and iterate the "final package" by running it with
   ts-node-dev. When running `yarn test:quick`, it will run the file and watch for changes,
   automatically restarting when needed. */
import createDatastreamClient from '../packages/datastream-client';
import wsConnector from '../packages/datastream-connector-ws';
// import wsConnector from '../packages/datastream-connector-uws';

const datastreamUrl = 'ws://localhost:9393';

createDatastreamClient(
  {
    log: true,
    url: datastreamUrl,
    key: '17paIsICur8sA0OBqG6dH5G1rmrHNMwt4oNk4iX9',
    connector: wsConnector,
  },
  {
    onConnect() {
      console.log('Connected!');
      this.subscribe('subscribe', 'ETH_FTM', [
        'markets_fill_created',
      ], undefined, 'markets');
    },
    onMessage(message) {
      console.log('Message Received: ', message);
    },
  },
);

console.log('Client Created');
