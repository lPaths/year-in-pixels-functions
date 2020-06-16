import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import "firebase-functions";

// import s from "./serviceAccountKey.json";

admin.initializeApp({});

exports.verifyFacebook = functions.auth.user().onCreate(async (snap) => {
  if (!snap.providerData.find((d) => d && d.providerId === "facebook.com"))
    return;

  await admin.auth().updateUser(snap.uid, {
    emailVerified: true,
  });
});
