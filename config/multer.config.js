const multer=require('multer')
const firebaseStorage=require('multer-firebase-storage');
const firebase=require('./firebase.config')
const serviceAccount=require('../chat-9a09b-firebase-adminsdk-y7v8o-52b100dbce.json');


const storage=firebaseStorage({
credentials: firebase.credential.cert(serviceAccount),
bucketName:'chat-9a09b.appspot.com'
})

const upload=multer({
   storage:storage,
})

module.exports=upload;