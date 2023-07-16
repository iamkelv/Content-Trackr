// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { DevTo, Hashnode, Medium } = initSchema(schema);

export {
  DevTo,
  Hashnode,
  Medium
};