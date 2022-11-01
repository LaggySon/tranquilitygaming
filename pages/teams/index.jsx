import { google } from "googleapis";
import styles from "../../styles/Teams.module.scss";

export async function getServerSideProps({ query }) {
  //GOOGLE AUTH
  const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");

  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    credentials: {
      private_key: privateKey,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
    },
  });
  const sheets = google.sheets({
    version: "v4",
    credentials: {
      private_key: privateKey,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
    },
    auth,
  });

  const spreadsheetId = process.env.TRANCE_SHEET_ID;
  const range = `OVERVIEW!A2:A25`;

  // var names = await sheets.spreadsheets.values.get({
  //   spreadsheetId,
  //   range,
  //   valueRenderOption: "FORMULA",
  // });
  // names = names.data.values;
  // console.log(names);
  var names = (
    await sheets.spreadsheets.get({
      spreadsheetId,
    })
  ).data.sheets.map((sheet) => {
    return sheet.properties.title;
  });
  names = names.slice(1, names.length - 1);
  return {
    props: {
      names,
    },
  };
}

export default function Post({ names }) {
  return (
    <div className={styles.tiercontainer + " container"}>
      {names.map((name) => (
        <div key={name}>{name}</div>
      ))}
    </div>
  );
}
