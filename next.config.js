const GraphQLClient = require("graphql-request").GraphQLClient;

const headers = {
  authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
};

const client = new GraphQLClient("https://graphql.datocms.com", { headers });

const REDIRECTS_QUERY = `query {
  redirectTable{redirects}
}`;

//request data from DatoCMS
const getRedirects = async () => {
  try {
    const data = await client.request(REDIRECTS_QUERY, { limit: 2000 });
    // console.log(data.redirectTable.redirects.data);
    return data.redirectTable.redirects.data;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  images: {
    domains: ["via.placeholder.com", "picsum.photos", "www.datocms-assets.com"],
  },
  distDir: process.env.BUILD_DIR || ".next",
  reactStrictMode: true,
  async redirects() {
    const redirs = await getRedirects();
    // console.log(redirs);
    const redirects = redirs.map((redirect) => {
      const source = redirect.OriginURL;
      const destination = redirect.DestinationURL;
      const permanent = true;
      return { source, destination, permanent };
    });
    return redirects;
  },
};
