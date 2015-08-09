ServiceConfiguration.configurations.upsert(
  { service: "github" },
  {
    $set: {
      clientId: "22c71f7b6614f0b741bc",
      loginStyle: "popup",
      secret: "e3d8d894926246e7ac2f72c7e1d2eb7cd14773df"
    }
  }
);

ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  {
    $set: {
      clientId: "144661402536001",
      loginStyle: "popup",
      secret: "1c29c53a1479bbff37493115f7c6d2a1"
    }
  }
);

ServiceConfiguration.configurations.upsert(
  { service: "google" },
  {
    $set: {
      clientId: "283013740136-v42df6dklk80qc1pcms7doefble92snp.apps.googleusercontent.com",
      loginStyle: "popup",
      secret: "nzVGhJtfnD1kWq-DEokTtdMO"
    }
  }
);

ServiceConfiguration.configurations.upsert(
  { service: "linkedin" },
  {
    $set: {
      clientId: "77nz33b1xfvosd",
      loginStyle: "popup",
      secret: "9quCnZ8jAke9TBlU"
    }
  }
);