import { FirebaseConfig, IS_FIREBASE_ENABLED } from '../../constants/FirebaseConfig';
import { savePersistentFirebaseKeyIfNeeded, getPersistentFirebaseKey } from '../../store/firebaseKeys';
let app:any=null;
export async function initFirebase(){ if(!IS_FIREBASE_ENABLED){ savePersistentFirebaseKeyIfNeeded(FirebaseConfig.apiKey,FirebaseConfig.projectId); return null; } try{ const {initializeApp,getApps}=await import('firebase/app'); const pk=getPersistentFirebaseKey(); const key=pk||FirebaseConfig.apiKey; savePersistentFirebaseKeyIfNeeded(FirebaseConfig.apiKey,FirebaseConfig.projectId); if(getApps().length===0) app=initializeApp({...FirebaseConfig, apiKey:key}); return app; }catch(e){return null;} }
