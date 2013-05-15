
/** Afiliate indexes **/
db.getCollection("Afiliate").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** AppAndroid indexes **/
db.getCollection("AppAndroid").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** Campaign indexes **/
db.getCollection("Campaign").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** Code indexes **/
db.getCollection("Code").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** Country indexes **/
db.getCollection("Country").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** Fabricant indexes **/
db.getCollection("Fabricant").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** Group indexes **/
db.getCollection("Group").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** Icon indexes **/
db.getCollection("Icon").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** Image indexes **/
db.getCollection("Image").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** Installation indexes **/
db.getCollection("Installation").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** Language indexes **/
db.getCollection("Language").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** Log indexes **/
db.getCollection("Log").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** NetworkOperator indexes **/
db.getCollection("NetworkOperator").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** Notification indexes **/
db.getCollection("Notification").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** Perfil indexes **/
db.getCollection("Perfil").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** PhoneModel indexes **/
db.getCollection("PhoneModel").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** Respuesta indexes **/
db.getCollection("Respuesta").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** Afiliate records **/
db.getCollection("Afiliate").insert({
  "_id": ObjectId("5188d6b66803fadf1200000d"),
  "active": false,
  "email": "",
  "foreignCampaign": [
    {
      "$ref": "Campaign",
      "$id": ObjectId("5188d6b66803fadf1200000e"),
      "$db": "domaDroid"
    }
  ],
  "foreignCountry": {
    "$ref": "Country",
    "$id": ObjectId("5188d6b66803fadf12000009"),
    "$db": "domaDroid"
  },
  "foreignInstallation": [
    {
      "$ref": "Installation",
      "$id": ObjectId("5188e6f66803fa7c0f000004"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5188e7936803fa9e0f000001"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5188ee216803fa4b10000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5188efb46803fa4b10000001"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5188f04b6803fa0d11000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5188f2786803fa5111000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5188f4d26803facb11000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890c0f6803fa710f000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890c166803fa7b0f000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890c406803faa30f000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890cb46803faa30f000003"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890dc46803faa30f000006"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890e586803faa30f000009"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890edf6803faa30f00000c"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890f0d6803faa30f00000f"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5189118b6803fa4410000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5189119b6803fa4410000003"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518915786803fabc10000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518915786803fabc10000003"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518915786803fabc10000006"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518915b46803fabc10000009"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518916656803fabc1000000c"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518918966803fa1511000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518918c36803fa1f11000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51891a9b6803fa5811000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51891d4f6803fa9611000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51891edf6803fabb11000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5189205f6803faf911000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518920726803faf911000003"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5189216b6803fa1212000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518921c36803fa2712000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5189220b6803fa3712000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518922966803fa4b12000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518a23826803fa0c0d000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518a23a06803fa250d000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518a25696803fa250d000003"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518cd2886803fa730e000000"),
      "$db": "domaDroid"
    }
  ],
  "lastName": "",
  "name": "test",
  "verifiqued": false
});

/** AppAndroid records **/
db.getCollection("AppAndroid").insert({
  "_id": ObjectId("5188d6b66803fadf1200000c"),
  "foreignGroup": {
    "$ref": "Group",
    "$id": ObjectId("5188d6b66803fadf1200000b"),
    "$db": "domaDroid"
  },
  "foreignInstallation": [
    {
      "$ref": "Installation",
      "$id": ObjectId("5188e6f66803fa7c0f000004"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5188e7936803fa9e0f000001"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5188ee216803fa4b10000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5188efb46803fa4b10000001"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5188f04b6803fa0d11000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5188f2786803fa5111000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5188f4d26803facb11000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890c0f6803fa710f000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890c166803fa7b0f000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890c406803faa30f000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890cb46803faa30f000003"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890dc46803faa30f000006"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890e586803faa30f000009"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890edf6803faa30f00000c"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890f0d6803faa30f00000f"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5189118b6803fa4410000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5189119b6803fa4410000003"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518915786803fabc10000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518915786803fabc10000003"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518915786803fabc10000006"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518915b46803fabc10000009"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518916656803fabc1000000c"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518918966803fa1511000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518918c36803fa1f11000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51891a9b6803fa5811000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51891d4f6803fa9611000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51891edf6803fabb11000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5189205f6803faf911000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518920726803faf911000003"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5189216b6803fa1212000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518921c36803fa2712000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5189220b6803fa3712000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518922966803fa4b12000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518a23826803fa0c0d000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518a23a06803fa250d000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518a25696803fa250d000003"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518cd2886803fa730e000000"),
      "$db": "domaDroid"
    }
  ],
  "packageName": "com.tuguu.test"
});

/** Campaign records **/
db.getCollection("Campaign").insert({
  "_id": ObjectId("5188d6b66803fadf1200000e"),
  "foreignInstallation": [
    {
      "$ref": "Installation",
      "$id": ObjectId("5188e6f66803fa7c0f000004"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5188e7936803fa9e0f000001"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5188ee216803fa4b10000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5188efb46803fa4b10000001"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5188f04b6803fa0d11000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5188f2786803fa5111000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5188f4d26803facb11000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890c0f6803fa710f000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890c166803fa7b0f000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890c406803faa30f000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890cb46803faa30f000003"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890dc46803faa30f000006"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890e586803faa30f000009"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890edf6803faa30f00000c"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890f0d6803faa30f00000f"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5189118b6803fa4410000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5189119b6803fa4410000003"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518915786803fabc10000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518915786803fabc10000003"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518915786803fabc10000006"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518915b46803fabc10000009"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518916656803fabc1000000c"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518918966803fa1511000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518918c36803fa1f11000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51891a9b6803fa5811000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51891d4f6803fa9611000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51891edf6803fabb11000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5189205f6803faf911000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518920726803faf911000003"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5189216b6803fa1212000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518921c36803fa2712000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5189220b6803fa3712000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518922966803fa4b12000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518a23826803fa0c0d000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518a23a06803fa250d000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518a25696803fa250d000003"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518cd2886803fa730e000000"),
      "$db": "domaDroid"
    }
  ],
  "foreingAfiliate": [
    {
      "$ref": "Afiliate",
      "$id": ObjectId("5188d6b66803fadf1200000d"),
      "$db": "domaDroid"
    }
  ],
  "foreingGroup": [
    {
      "$ref": "Group",
      "$id": ObjectId("5188d6b66803fadf1200000b"),
      "$db": "domaDroid"
    }
  ]
});

/** Code records **/
db.getCollection("Code").insert({
  "_id": ObjectId("5188ef866803fa4810000000"),
  "code": "error"
});
db.getCollection("Code").insert({
  "_id": ObjectId("5188ef866803fa4810000001"),
  "code": "correct"
});
db.getCollection("Code").insert({
  "_id": ObjectId("5188ef866803fa4810000002"),
  "code": "warning"
});

/** Country records **/
db.getCollection("Country").insert({
  "_id": ObjectId("5188d6b66803fadf12000009"),
  "name": "ES"
});

/** Fabricant records **/
db.getCollection("Fabricant").insert({
  "_id": ObjectId("5188e6f66803fa7c0f000000"),
  "name": "samsung"
});

/** Group records **/
db.getCollection("Group").insert({
  "_id": ObjectId("5188d6b66803fadf1200000b"),
  "addFavorite": true,
  "addNotification": true,
  "addShortcut": true,
  "changeHomepage": true,
  "foreignAppAndroid": [
    {
      "$ref": "AppAndroid",
      "$id": ObjectId("5188d6b66803fadf1200000c"),
      "$db": "domaDroid"
    }
  ],
  "foreignCampaign": [
    {
      "$ref": "Campaign",
      "$id": ObjectId("5188d6b66803fadf1200000e"),
      "$db": "domaDroid"
    }
  ],
  "foreignInstallation": [
    {
      "$ref": "Installation",
      "$id": ObjectId("5188e6f66803fa7c0f000004"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5188e7936803fa9e0f000001"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5188ee216803fa4b10000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5188efb46803fa4b10000001"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5188f04b6803fa0d11000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5188f2786803fa5111000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5188f4d26803facb11000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890c0f6803fa710f000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890c166803fa7b0f000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890c406803faa30f000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890cb46803faa30f000003"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890dc46803faa30f000006"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890e586803faa30f000009"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890edf6803faa30f00000c"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51890f0d6803faa30f00000f"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5189118b6803fa4410000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5189119b6803fa4410000003"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518915786803fabc10000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518915786803fabc10000003"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518915786803fabc10000006"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518915b46803fabc10000009"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518916656803fabc1000000c"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518918966803fa1511000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518918c36803fa1f11000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51891a9b6803fa5811000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51891d4f6803fa9611000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("51891edf6803fabb11000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5189205f6803faf911000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518920726803faf911000003"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5189216b6803fa1212000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518921c36803fa2712000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("5189220b6803fa3712000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518922966803fa4b12000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518a23826803fa0c0d000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518a23a06803fa250d000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518a25696803fa250d000003"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Installation",
      "$id": ObjectId("518cd2886803fa730e000000"),
      "$db": "domaDroid"
    }
  ],
  "foreignPerfil": [
    {
      "$ref": "Perfil",
      "$id": ObjectId("5188d6b66803fadf12000012"),
      "$db": "domaDroid"
    }
  ],
  "iconsCount": NumberLong(1),
  "notificationCount": NumberLong(1),
  "urlRedirect": "http:\/\/start.vafoon.com\/"
});

/** Icon records **/
db.getCollection("Icon").insert({
  "_id": ObjectId("5188d6b66803fadf12000010"),
  "text": "Campaña 1",
  "clicks": NumberInt(0),
  "foreignImage": {
    "$ref": "Image",
    "$id": ObjectId("5188d6b66803fadf1200000f"),
    "$db": "domaDroid"
  }
});

/** Image records **/
db.getCollection("Image").insert({
  "_id": ObjectId("5188d6b66803fadf1200000f"),
  "name": "images.jpg",
  "path": "\/var\/www\/Symfony\/adsPanel\/app\/Resources\/campaigns\/images\/images.jpg"
});

/** Installation records **/
db.getCollection("Installation").insert({
  "_id": ObjectId("518a23826803fa0c0d000000"),
  "androidId": "dc8a38f7e32cc31e",
  "date": ISODate("2013-05-08T10:05:54.284Z"),
  "email": "aitor.marrero@tuguu.com",
  "foreignAfiliate": {
    "$ref": "Afiliate",
    "$id": ObjectId("5188d6b66803fadf1200000d"),
    "$db": "domaDroid"
  },
  "foreignApp": {
    "$ref": "AppAndroid",
    "$id": ObjectId("5188d6b66803fadf1200000c"),
    "$db": "domaDroid"
  },
  "foreignCampaign": {
    "$ref": "Campaign",
    "$id": ObjectId("5188d6b66803fadf1200000e"),
    "$db": "domaDroid"
  },
  "foreignCountry": {
    "$ref": "Country",
    "$id": ObjectId("5188d6b66803fadf12000009"),
    "$db": "domaDroid"
  },
  "foreignGroup": {
    "$ref": "Group",
    "$id": ObjectId("5188d6b66803fadf1200000b"),
    "$db": "domaDroid"
  },
  "foreignLanguage": {
    "$ref": "Language",
    "$id": ObjectId("5188d6b66803fadf1200000a"),
    "$db": "domaDroid"
  },
  "foreignLog": [
    {
      "$ref": "Log",
      "$id": ObjectId("518a23826803fa0c0d000001"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Log",
      "$id": ObjectId("518a23826803fa0c0d000002"),
      "$db": "domaDroid"
    }
  ],
  "foreignNetworkOperator": {
    "$ref": "NetworkOperator",
    "$id": ObjectId("5188e6f66803fa7c0f000002"),
    "$db": "domaDroid"
  },
  "foreignPhoneModel": {
    "$ref": "PhoneModel",
    "$id": ObjectId("5188e6f66803fa7c0f000001"),
    "$db": "domaDroid"
  },
  "hash": "vGnNU0LE1daY2x",
  "imei": "354913053162570",
  "isTablet": false,
  "networkSubtype": "HSDPA",
  "screenSize": "240x320",
  "sd": true,
  "sdkVersion": NumberInt(10),
  "valid": true,
  "wifi": true
});
db.getCollection("Installation").insert({
  "_id": ObjectId("518a23a06803fa250d000000"),
  "androidId": "dc8a38f7e32cc31e",
  "date": ISODate("2013-05-08T10:06:24.661Z"),
  "email": "aitor.marrero@tuguu.com",
  "foreignAfiliate": {
    "$ref": "Afiliate",
    "$id": ObjectId("5188d6b66803fadf1200000d"),
    "$db": "domaDroid"
  },
  "foreignApp": {
    "$ref": "AppAndroid",
    "$id": ObjectId("5188d6b66803fadf1200000c"),
    "$db": "domaDroid"
  },
  "foreignCampaign": {
    "$ref": "Campaign",
    "$id": ObjectId("5188d6b66803fadf1200000e"),
    "$db": "domaDroid"
  },
  "foreignCountry": {
    "$ref": "Country",
    "$id": ObjectId("5188d6b66803fadf12000009"),
    "$db": "domaDroid"
  },
  "foreignGroup": {
    "$ref": "Group",
    "$id": ObjectId("5188d6b66803fadf1200000b"),
    "$db": "domaDroid"
  },
  "foreignLanguage": {
    "$ref": "Language",
    "$id": ObjectId("5188d6b66803fadf1200000a"),
    "$db": "domaDroid"
  },
  "foreignLog": [
    {
      "$ref": "Log",
      "$id": ObjectId("518a23a06803fa250d000001"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Log",
      "$id": ObjectId("518a23a06803fa250d000002"),
      "$db": "domaDroid"
    }
  ],
  "foreignNetworkOperator": {
    "$ref": "NetworkOperator",
    "$id": ObjectId("5188e6f66803fa7c0f000002"),
    "$db": "domaDroid"
  },
  "foreignPhoneModel": {
    "$ref": "PhoneModel",
    "$id": ObjectId("5188e6f66803fa7c0f000001"),
    "$db": "domaDroid"
  },
  "hash": "fJsyRyQLQQbX9l",
  "imei": "354913053162570",
  "isTablet": false,
  "networkSubtype": "HSDPA",
  "screenSize": "240x320",
  "sd": true,
  "sdkVersion": NumberInt(10),
  "valid": true,
  "wifi": true
});
db.getCollection("Installation").insert({
  "_id": ObjectId("518a25696803fa250d000003"),
  "androidId": "dc8a38f7e32cc31e",
  "date": ISODate("2013-05-08T10:14:01.628Z"),
  "email": "aitor.marrero@tuguu.com",
  "foreignAfiliate": {
    "$ref": "Afiliate",
    "$id": ObjectId("5188d6b66803fadf1200000d"),
    "$db": "domaDroid"
  },
  "foreignApp": {
    "$ref": "AppAndroid",
    "$id": ObjectId("5188d6b66803fadf1200000c"),
    "$db": "domaDroid"
  },
  "foreignCampaign": {
    "$ref": "Campaign",
    "$id": ObjectId("5188d6b66803fadf1200000e"),
    "$db": "domaDroid"
  },
  "foreignCountry": {
    "$ref": "Country",
    "$id": ObjectId("5188d6b66803fadf12000009"),
    "$db": "domaDroid"
  },
  "foreignGroup": {
    "$ref": "Group",
    "$id": ObjectId("5188d6b66803fadf1200000b"),
    "$db": "domaDroid"
  },
  "foreignLanguage": {
    "$ref": "Language",
    "$id": ObjectId("5188d6b66803fadf1200000a"),
    "$db": "domaDroid"
  },
  "foreignLog": [
    {
      "$ref": "Log",
      "$id": ObjectId("518a25696803fa250d000004"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Log",
      "$id": ObjectId("518a25696803fa250d000005"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Log",
      "$id": ObjectId("518a25a56803fae20d000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Log",
      "$id": ObjectId("518a25e46803fadb0c000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Log",
      "$id": ObjectId("518a25e46803fadb0c000001"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Log",
      "$id": ObjectId("518a26206803faec0d000000"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Log",
      "$id": ObjectId("518a26206803faec0d000001"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Log",
      "$id": ObjectId("518a26206803faec0d000002"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Log",
      "$id": ObjectId("518a26626803fae20d000001"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Log",
      "$id": ObjectId("518a26626803fae20d000002"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Log",
      "$id": ObjectId("518a26626803fae20d000003"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Log",
      "$id": ObjectId("518a26626803fae20d000004"),
      "$db": "domaDroid"
    }
  ],
  "foreignNetworkOperator": {
    "$ref": "NetworkOperator",
    "$id": ObjectId("5188e6f66803fa7c0f000002"),
    "$db": "domaDroid"
  },
  "foreignPhoneModel": {
    "$ref": "PhoneModel",
    "$id": ObjectId("5188e6f66803fa7c0f000001"),
    "$db": "domaDroid"
  },
  "hash": "t5uGkYoRsc8qR5",
  "imei": "354913053162570",
  "isTablet": false,
  "latitude": 28.128917016571,
  "longitude": -16.741926730962,
  "networkSubtype": "HSDPA",
  "screenSize": "240x320",
  "sd": true,
  "sdkVersion": NumberInt(10),
  "valid": true,
  "wifi": true
});
db.getCollection("Installation").insert({
  "_id": ObjectId("518cd2886803fa730e000000"),
  "androidId": "dc8a38f7e32cc31e",
  "date": ISODate("2013-05-10T10:57:12.411Z"),
  "email": "aitor.marrero@tuguu.com",
  "foreignAfiliate": {
    "$ref": "Afiliate",
    "$id": ObjectId("5188d6b66803fadf1200000d"),
    "$db": "domaDroid"
  },
  "foreignApp": {
    "$ref": "AppAndroid",
    "$id": ObjectId("5188d6b66803fadf1200000c"),
    "$db": "domaDroid"
  },
  "foreignCampaign": {
    "$ref": "Campaign",
    "$id": ObjectId("5188d6b66803fadf1200000e"),
    "$db": "domaDroid"
  },
  "foreignCountry": {
    "$ref": "Country",
    "$id": ObjectId("5188d6b66803fadf12000009"),
    "$db": "domaDroid"
  },
  "foreignGroup": {
    "$ref": "Group",
    "$id": ObjectId("5188d6b66803fadf1200000b"),
    "$db": "domaDroid"
  },
  "foreignLanguage": {
    "$ref": "Language",
    "$id": ObjectId("5188d6b66803fadf1200000a"),
    "$db": "domaDroid"
  },
  "foreignLog": [
    {
      "$ref": "Log",
      "$id": ObjectId("518cd2886803fa730e000001"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Log",
      "$id": ObjectId("518cd2886803fa730e000002"),
      "$db": "domaDroid"
    },
    {
      "$ref": "Log",
      "$id": ObjectId("518cd2bb6803fa9a0e000000"),
      "$db": "domaDroid"
    }
  ],
  "foreignNetworkOperator": {
    "$ref": "NetworkOperator",
    "$id": ObjectId("5188e6f66803fa7c0f000002"),
    "$db": "domaDroid"
  },
  "foreignPhoneModel": {
    "$ref": "PhoneModel",
    "$id": ObjectId("5188e6f66803fa7c0f000001"),
    "$db": "domaDroid"
  },
  "hash": "9o3WfijWg8Ka2N",
  "imei": "354913053162570",
  "isTablet": false,
  "networkSubtype": "HSDPA",
  "screenSize": "240x320",
  "sd": true,
  "sdkVersion": NumberInt(10),
  "valid": true,
  "wifi": true
});

/** Language records **/
db.getCollection("Language").insert({
  "_id": ObjectId("5188d6b66803fadf1200000a"),
  "name": "es"
});

/** Log records **/
db.getCollection("Log").insert({
  "_id": ObjectId("518a23826803fa0c0d000001"),
  "text": "Shortcut created",
  "foreignInstallation": {
    "$ref": "Installation",
    "$id": ObjectId("518a23826803fa0c0d000000"),
    "$db": "domaDroid"
  },
  "foreignCode": {
    "$ref": "Code",
    "$id": ObjectId("5188ef866803fa4810000001"),
    "$db": "domaDroid"
  }
});
db.getCollection("Log").insert({
  "_id": ObjectId("518a23826803fa0c0d000002"),
  "text": "Notification added",
  "foreignInstallation": {
    "$ref": "Installation",
    "$id": ObjectId("518a23826803fa0c0d000000"),
    "$db": "domaDroid"
  },
  "foreignCode": {
    "$ref": "Code",
    "$id": ObjectId("5188ef866803fa4810000001"),
    "$db": "domaDroid"
  }
});
db.getCollection("Log").insert({
  "_id": ObjectId("518a23a06803fa250d000001"),
  "text": "Shortcut created",
  "foreignInstallation": {
    "$ref": "Installation",
    "$id": ObjectId("518a23a06803fa250d000000"),
    "$db": "domaDroid"
  },
  "foreignCode": {
    "$ref": "Code",
    "$id": ObjectId("5188ef866803fa4810000001"),
    "$db": "domaDroid"
  }
});
db.getCollection("Log").insert({
  "_id": ObjectId("518a23a06803fa250d000002"),
  "text": "Notification added",
  "foreignInstallation": {
    "$ref": "Installation",
    "$id": ObjectId("518a23a06803fa250d000000"),
    "$db": "domaDroid"
  },
  "foreignCode": {
    "$ref": "Code",
    "$id": ObjectId("5188ef866803fa4810000001"),
    "$db": "domaDroid"
  }
});
db.getCollection("Log").insert({
  "_id": ObjectId("518a25696803fa250d000004"),
  "text": "Shortcut created",
  "foreignInstallation": {
    "$ref": "Installation",
    "$id": ObjectId("518a25696803fa250d000003"),
    "$db": "domaDroid"
  },
  "foreignCode": {
    "$ref": "Code",
    "$id": ObjectId("5188ef866803fa4810000001"),
    "$db": "domaDroid"
  }
});
db.getCollection("Log").insert({
  "_id": ObjectId("518a25696803fa250d000005"),
  "text": "Notification added",
  "foreignInstallation": {
    "$ref": "Installation",
    "$id": ObjectId("518a25696803fa250d000003"),
    "$db": "domaDroid"
  },
  "foreignCode": {
    "$ref": "Code",
    "$id": ObjectId("5188ef866803fa4810000001"),
    "$db": "domaDroid"
  }
});
db.getCollection("Log").insert({
  "_id": ObjectId("518a25a56803fae20d000000"),
  "text": "Homepage changed",
  "foreignInstallation": {
    "$ref": "Installation",
    "$id": ObjectId("518a25696803fa250d000003"),
    "$db": "domaDroid"
  },
  "foreignCode": {
    "$ref": "Code",
    "$id": ObjectId("5188ef866803fa4810000001"),
    "$db": "domaDroid"
  }
});
db.getCollection("Log").insert({
  "_id": ObjectId("518a25e46803fadb0c000000"),
  "text": "Homepage changed",
  "foreignInstallation": {
    "$ref": "Installation",
    "$id": ObjectId("518a25696803fa250d000003"),
    "$db": "domaDroid"
  },
  "foreignCode": {
    "$ref": "Code",
    "$id": ObjectId("5188ef866803fa4810000001"),
    "$db": "domaDroid"
  }
});
db.getCollection("Log").insert({
  "_id": ObjectId("518a25e46803fadb0c000001"),
  "text": "Homepage changed",
  "foreignInstallation": {
    "$ref": "Installation",
    "$id": ObjectId("518a25696803fa250d000003"),
    "$db": "domaDroid"
  },
  "foreignCode": {
    "$ref": "Code",
    "$id": ObjectId("5188ef866803fa4810000001"),
    "$db": "domaDroid"
  }
});
db.getCollection("Log").insert({
  "_id": ObjectId("518a26206803faec0d000000"),
  "text": "Homepage changed",
  "foreignInstallation": {
    "$ref": "Installation",
    "$id": ObjectId("518a25696803fa250d000003"),
    "$db": "domaDroid"
  },
  "foreignCode": {
    "$ref": "Code",
    "$id": ObjectId("5188ef866803fa4810000001"),
    "$db": "domaDroid"
  }
});
db.getCollection("Log").insert({
  "_id": ObjectId("518a26206803faec0d000001"),
  "text": "Homepage changed",
  "foreignInstallation": {
    "$ref": "Installation",
    "$id": ObjectId("518a25696803fa250d000003"),
    "$db": "domaDroid"
  },
  "foreignCode": {
    "$ref": "Code",
    "$id": ObjectId("5188ef866803fa4810000001"),
    "$db": "domaDroid"
  }
});
db.getCollection("Log").insert({
  "_id": ObjectId("518a26206803faec0d000002"),
  "text": "Homepage changed",
  "foreignInstallation": {
    "$ref": "Installation",
    "$id": ObjectId("518a25696803fa250d000003"),
    "$db": "domaDroid"
  },
  "foreignCode": {
    "$ref": "Code",
    "$id": ObjectId("5188ef866803fa4810000001"),
    "$db": "domaDroid"
  }
});
db.getCollection("Log").insert({
  "_id": ObjectId("518a26626803fae20d000001"),
  "text": "Homepage changed",
  "foreignInstallation": {
    "$ref": "Installation",
    "$id": ObjectId("518a25696803fa250d000003"),
    "$db": "domaDroid"
  },
  "foreignCode": {
    "$ref": "Code",
    "$id": ObjectId("5188ef866803fa4810000001"),
    "$db": "domaDroid"
  }
});
db.getCollection("Log").insert({
  "_id": ObjectId("518a26626803fae20d000002"),
  "text": "Homepage changed",
  "foreignInstallation": {
    "$ref": "Installation",
    "$id": ObjectId("518a25696803fa250d000003"),
    "$db": "domaDroid"
  },
  "foreignCode": {
    "$ref": "Code",
    "$id": ObjectId("5188ef866803fa4810000001"),
    "$db": "domaDroid"
  }
});
db.getCollection("Log").insert({
  "_id": ObjectId("518a26626803fae20d000003"),
  "text": "Homepage changed",
  "foreignInstallation": {
    "$ref": "Installation",
    "$id": ObjectId("518a25696803fa250d000003"),
    "$db": "domaDroid"
  },
  "foreignCode": {
    "$ref": "Code",
    "$id": ObjectId("5188ef866803fa4810000001"),
    "$db": "domaDroid"
  }
});
db.getCollection("Log").insert({
  "_id": ObjectId("518a26626803fae20d000004"),
  "text": "Homepage changed",
  "foreignInstallation": {
    "$ref": "Installation",
    "$id": ObjectId("518a25696803fa250d000003"),
    "$db": "domaDroid"
  },
  "foreignCode": {
    "$ref": "Code",
    "$id": ObjectId("5188ef866803fa4810000001"),
    "$db": "domaDroid"
  }
});
db.getCollection("Log").insert({
  "_id": ObjectId("518cd2886803fa730e000001"),
  "text": "Shortcut created",
  "foreignInstallation": {
    "$ref": "Installation",
    "$id": ObjectId("518cd2886803fa730e000000"),
    "$db": "domaDroid"
  },
  "foreignCode": {
    "$ref": "Code",
    "$id": ObjectId("5188ef866803fa4810000001"),
    "$db": "domaDroid"
  }
});
db.getCollection("Log").insert({
  "_id": ObjectId("518cd2886803fa730e000002"),
  "text": "Notification added",
  "foreignInstallation": {
    "$ref": "Installation",
    "$id": ObjectId("518cd2886803fa730e000000"),
    "$db": "domaDroid"
  },
  "foreignCode": {
    "$ref": "Code",
    "$id": ObjectId("5188ef866803fa4810000001"),
    "$db": "domaDroid"
  }
});
db.getCollection("Log").insert({
  "_id": ObjectId("518cd2bb6803fa9a0e000000"),
  "text": "Homepage changed",
  "foreignInstallation": {
    "$ref": "Installation",
    "$id": ObjectId("518cd2886803fa730e000000"),
    "$db": "domaDroid"
  },
  "foreignCode": {
    "$ref": "Code",
    "$id": ObjectId("5188ef866803fa4810000001"),
    "$db": "domaDroid"
  }
});

/** NetworkOperator records **/
db.getCollection("NetworkOperator").insert({
  "_id": ObjectId("5188e6f66803fa7c0f000002"),
  "name": "Movistar"
});

/** Notification records **/
db.getCollection("Notification").insert({
  "_id": ObjectId("5188d6b66803fadf12000011"),
  "title": "Campaña 1",
  "message": "Este es el mensaje de la campaña 1",
  "extendMessage": "Mensaje gordo de la campaña 1",
  "bigtitle": "Titulo grande campaña 1",
  "foreignImage": {
    "$ref": "Image",
    "$id": ObjectId("5188d6b66803fadf1200000f"),
    "$db": "domaDroid"
  }
});

/** Perfil records **/
db.getCollection("Perfil").insert({
  "_id": ObjectId("5188d6b66803fadf12000012"),
  "foreignCountry": {
    "$ref": "Country",
    "$id": ObjectId("5188d6b66803fadf12000009"),
    "$db": "domaDroid"
  },
  "foreignGroup": {
    "$ref": "Group",
    "$id": ObjectId("5188d6b66803fadf1200000b"),
    "$db": "domaDroid"
  },
  "foreignIcon": [
    {
      "$ref": "Icon",
      "$id": ObjectId("5188d6b66803fadf12000010"),
      "$db": "domaDroid"
    }
  ],
  "foreignLanguage": {
    "$ref": "Language",
    "$id": ObjectId("5188d6b66803fadf1200000a"),
    "$db": "domaDroid"
  },
  "foreignNotification": [
    {
      "$ref": "Notification",
      "$id": ObjectId("5188d6b66803fadf12000011"),
      "$db": "domaDroid"
    }
  ]
});

/** PhoneModel records **/
db.getCollection("PhoneModel").insert({
  "_id": ObjectId("5188e6f66803fa7c0f000001"),
  "phoneModel": "GT-S5360",
  "fabricant": {
    "$ref": "Fabricant",
    "$id": ObjectId("5188e6f66803fa7c0f000000"),
    "$db": "domaDroid"
  }
});

/** Respuesta records **/
db.getCollection("Respuesta").insert({
  "_id": ObjectId("5188d6b66803fadf12000007"),
  "identificador": "receiver",
  "intent": "android.intent.action.MULTI_CSC_CLEAR",
  "paquete": "com.android.browser",
  "componente": "com.android.browser.BrowserHomepageSetReceiver"
});
db.getCollection("Respuesta").insert({
  "_id": ObjectId("5188d6b66803fadf12000008"),
  "identificador": "homepage",
  "intent": "android.intent.action.OMADM_BROWSER_SET_HOMEPAGE",
  "atributo": "homepage"
});

/** system.indexes records **/
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "domaDroid.Respuesta",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "domaDroid.Country",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "domaDroid.Language",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "domaDroid.Group",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "domaDroid.AppAndroid",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "domaDroid.Afiliate",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "domaDroid.Campaign",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "domaDroid.Image",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "domaDroid.Icon",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "domaDroid.Notification",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "domaDroid.Perfil",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "domaDroid.Fabricant",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "domaDroid.PhoneModel",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "domaDroid.NetworkOperator",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "domaDroid.Installation",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "domaDroid.Code",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "domaDroid.Log",
  "name": "_id_"
});
