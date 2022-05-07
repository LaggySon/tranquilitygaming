import { google } from "googleapis";

export async function getServerSideProps({ query }) {
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  const spreadsheetId = process.env.TRANCE_SHEET_ID;

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

export default function Post({ names, poops }) {
  return (
    <div>
      {names.map((name) => (
        <div key={name}>{name}</div>
      ))}
    </div>
  );
}
