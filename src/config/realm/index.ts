import Realm from 'realm';
import TodoSchema from './schemas';

export const getRealm = async () => {
  return Realm.open({
    path: 'myrealm',
    schema: [TodoSchema],
    schemaVersion: 1,
  });
};
