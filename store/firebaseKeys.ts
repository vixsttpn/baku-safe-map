import { storage } from './storage';
const KEY='firebase_api_key_persistent';
const PID='firebase_project_id_persistent';
export function getPersistentFirebaseKey(){return storage.getString(KEY)||null;}
export function savePersistentFirebaseKeyIfNeeded(apiKey:string,projectId:string){const ex=storage.getString(KEY); if(!ex){storage.set(KEY,apiKey); storage.set(PID,projectId);}}
