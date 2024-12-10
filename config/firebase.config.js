const Firebase=require('firebase-admin')
const serviceAccount=require('../chat-9a09b-firebase-adminsdk-y7v8o-52b100dbce.json')


const firebase=Firebase.initializeApp({
   credential:Firebase.credential.cert(serviceAccount),
   storageBucket:'chat-9a09b.appspot.com'
})

module.exports=Firebase;