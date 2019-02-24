const functions = require("firebase-functions");
const cors = require("cors")({origin: true});
const fs = require("fs");
const uuid = require("uuid");

// const gcconfig = {
//   projectId: "rn-project-1550512411254",
//   keyFilename: "rn-project.json"
// } 
const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
  projectId: "rn-project-1550512411254",
  keyFilename: "rn-project.json"
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.storeImage = functions.https.onRequest((request, response) => {
  return cors(request, response, () => {
    const body = JSON.parse(request.body)
    fs.writeFileSync('/tmp/uploaded-image.jpg', body.image, 'base64', (e) => {
      console.log(e);
      return request.status(500).json({error: e})
    })
    const id = uuid()
    const bucket = storage.bucket('rn-project-1550512411254.appspot.com');
    return bucket.upload('/tmp/uploaded-image.jpg', {
       uploadType: 'media',
       destination: '/place/' + id + ".jpg",
       metadata: {
        metadata: {
          contentType: "image/jpeg",
          firebaseStorageDownloadTokens: id
        }
      }
    }, (error, file) => {
      if(!error) {
        return response.status(201).json({
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/' + bucket.name + '/o/' + encodeURIComponent(file.name) + '?alt=media&token=' + id
        })
      } else {
        console.log(error)
        return response.status(500).json({error: error})
      }
    })
  })
});
