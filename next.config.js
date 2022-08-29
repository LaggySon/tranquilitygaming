module.exports = {
  images: {
    domains: ["via.placeholder.com", "picsum.photos"],
  },

  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/websitefeedback",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSdPvxHAjR391U6qK_fObwrKxWEA093t0rGo9mGwAFGiBZMY5g/viewform?usp=sf_link",
        permanent: false,
        basePath: false,
      },
      {
        source: "/twitchsignups",
        destination:
          "https://docs.google.com/spreadsheets/d/1XRfqbp6enH9At6mhe0W6usnJJ35_kTl5MjO0ENgxZz4/edit?usp=sharing",
        permanent: false,
        basePath: false,
      },
      {
        source: "/twitchcaster",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLScd8BI36MCnq_zeaQ61TE4YmKqNavko1fh8FqpK4VVeoYIRIA/viewform?usp=sf_link",
        permanent: false,
        basePath: false,
      },
      {
        source: "/twitchproducer",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSdgxmwrKtU4U61xR8wr2Y55-oqWNCdhpeb3RCMbpjTBSsF4MA/viewform?usp=sf_link",
        permanent: false,
        basePath: false,
      },
      {
        source: "/NAapplication",
        destination:
          "https://docs.google.com/forms/d/1WPqOBiofRgwyd11Pias3pCDXdlBhZHhlke11WWhsPlc/edit",
        permanent: false,
        basePath: false,
      },
      {
        source: "/EUapplication",
        destination:
          "https://docs.google.com/forms/d/1hj0Z_laLptd91Z9FHeQhlrydWqpKg3P7kauoBENGDv4/edit",
        permanent: false,
        basePath: false,
      },
      {
        source: "/teamlogos",
        destination: "http://www.owtranquility.com/tranqLogos.zip",
        permanent: false,
        basePath: false,
      },
      {
        source: "/euwmsharmony",
        destination:
          "https://docs.google.com/spreadsheets/d/1o0xI6DDOiZLLcglTVkuTWaNk4B4q64VQRFF4wOoCAqk/edit#gid=1554200866",
        permanent: false,
        basePath: false,
      },
      {
        source: "/euwmsdiscord",
        destination:
          "https://docs.google.com/spreadsheets/d/17lw8wUiMbDld59C-rFQNLbjcLYg-Im2clCX8vowXCN4/edit#gid=1554200866",
        permanent: false,
        basePath: false,
      },
      {
        source: "/nawmsharmonyaurum",
        destination:
          "https://docs.google.com/spreadsheets/d/1l7Ni5T6W7YUgOuP-wu0R9gRz0z8eqOiNZaSHqeVctq4/edit#gid=1554200866",
        permanent: false,
        basePath: false,
      },
      {
        source: "/nawmsharmonyindigo",
        destination:
          "https://docs.google.com/spreadsheets/d/1ulYIJ-nOvsftzei4CFxIQmJE2kaJFSVXDC0rsSxTFco/edit#gid=1842740400",
        permanent: false,
        basePath: false,
      },
      {
        source: "/nawmsharmonyelimination",
        destination: "/",
        permanent: false,
        basePath: false,
      },
      {
        source: "/nawmsharmonychampionship",
        destination: "/",
        permanent: false,
        basePath: false,
      },
      {
        source: "/nawmsdiscordaurum",
        destination:
          "https://docs.google.com/spreadsheets/d/1RlGs2pWHn2IL1Xk9nUcbaeogK7IiLnEfJVNLUrH-Ycs/edit#gid=1554200866",
        permanent: false,
        basePath: false,
      },
      {
        source: "/nawmsdiscordindigo",
        destination:
          "https://docs.google.com/spreadsheets/d/1HB6hXw30B1webiIYgzhOCUTRmDXKFjCU2rSvMlRMjJE/edit#gid=1842740400",
        permanent: false,
        basePath: false,
      },
      {
        source: "/nawmsdiscordelimination",
        destination: "/",
        permanent: false,
        basePath: false,
      },
      {
        source: "/nawmsdiscordchampionship",
        destination: "/",
        permanent: false,
        basePath: false,
      },
      {
        source: "/nawmstrance",
        destination:
          "https://docs.google.com/spreadsheets/d/11JCytyE_Ng4LkbG1ymkk1UZlqMoO9r5cn06PjxgcNWY/edit#gid=672600031",
        permanent: false,
        basePath: false,
      },
      {
        source: "/nawmstranceaurum",
        destination: "/",
        permanent: false,
        basePath: false,
      },
      {
        source: "/nawmstranceindigo",
        destination: "/",
        permanent: false,
        basePath: false,
      },
      {
        source: "/nawmstranceelimination",
        destination: "/",
        permanent: false,
        basePath: false,
      },
      {
        source: "/nawmstrancechampionship",
        destination: "/",
        permanent: false,
        basePath: false,
      },
      {
        source: "/legacysheets",
        destination:
          "https://docs.google.com/spreadsheets/d/1xxNhYLstSt-QieDRq5N_epgT6pCx-RfT9dfJ9Q8K9qU/edit#gid=0",
        permanent: false,
        basePath: false,
      },
      {
        source: "/euharmonyrosters",
        destination:
          "https://docs.google.com/spreadsheets/d/1YaJlfXq9iru0HjBKj5ntyuX8lUmI5FkFMVrN-C56D4k/edit#gid=0",
        permanent: false,
        basePath: false,
      },
      {
        source: "/eudiscordrosters",
        destination:
          "https://docs.google.com/spreadsheets/d/1dRy6aqaPZEvG5Sd0ruETtr1yJcAFUu_5ifXPacEaixA/edit#gid=0",
        permanent: false,
        basePath: false,
      },
      {
        source: "/naharmonyrosters",
        destination:
          "https://docs.google.com/spreadsheets/d/1N_tfo7cbltdXWjkJmLubCb7dNTq3vHQWqaD9pltONsY/edit#gid=0",
        permanent: false,
        basePath: false,
      },
      {
        source: "/nadiscordrosters",
        destination:
          "https://docs.google.com/spreadsheets/d/1eylt-Fi5lGYuegdugd6oAJwm6Lzleomdgka-pQ-ngew/edit#gid=0",
        permanent: false,
        basePath: false,
      },
      {
        source: "/natrancerosters",
        destination:
          "https://docs.google.com/spreadsheets/d/1uDVMSuzlkGFcf0Yy_sAyoBJ_rvGvJy2h-3AJbTcStVE/edit#gid=0",
        permanent: false,
        basePath: false,
      },
      {
        source: "/legacyrosters",
        destination:
          "https://docs.google.com/spreadsheets/d/1xxNhYLstSt-QieDRq5N_epgT6pCx-RfT9dfJ9Q8K9qU/edit#gid=0",
        permanent: false,
        basePath: false,
      },
      {
        source: "/rulebook",
        destination:
          "https://docs.google.com/document/d/1HB-r_Gy89yRZqG0fS5Hphg4xzYvtmcWixoc2qCasvCo/edit",
        permanent: false,
        basePath: false,
      },
      {
        source: "/natranceschedule",
        destination:
          "https://play.toornament.com/en_US/tournaments/5948364997340381184/matches/schedule",
        permanent: false,
        basePath: false,
      },
      {
        source: "/euharmonyschedule",
        destination:
          "https://play.toornament.com/en_US/tournaments/5948233015183769600/matches/schedule",
        permanent: false,
        basePath: false,
      },
      {
        source: "/eudiscordschedule",
        destination:
          "https://play.toornament.com/en_US/tournaments/5948233885389987840/matches/schedule",
        permanent: false,
        basePath: false,
      },
      {
        source: "/nadiscordschedule",
        destination:
          "https://play.toornament.com/en_US/tournaments/5948231386740236288/matches/schedule",
        permanent: false,
        basePath: false,
      },
      {
        source: "/naharmonyschedule",
        destination:
          "https://play.toornament.com/en_US/tournaments/5948176605954777088/matches/schedule",
        permanent: false,
        basePath: false,
      },
      {
        source: "/S1Playlist",
        destination:
          "https://www.youtube.com/playlist?list=PLGnon4FprkngZz1gzX77xcQMuFnKNQUNt",
        permanent: false,
        basePath: false,
      },
      {
        source: "/S2Playlist",
        destination:
          "https://www.youtube.com/playlist?list=PLGnon4FprkngisrSFCB_Vpw5MFAObSY4O",
        permanent: false,
        basePath: false,
      },
      {
        source: "/S3Playlist",
        destination:
          "https://www.youtube.com/playlist?list=PLGnon4Fprknh2nMa81QvoxZbcLAYjkkuX",
        permanent: false,
        basePath: false,
      },
      {
        source: "/S4Playlist",
        destination:
          "https://www.youtube.com/playlist?list=PLGnon4FprknhqNQQNcByHgyUiPsttjxf-",
        permanent: false,
        basePath: false,
      },
      {
        source: "/S5Playlist",
        destination:
          "https://www.youtube.com/playlist?list=PLGnon4Fprknj3eB-RqmM57BZgkEhV7Za8",
        permanent: false,
        basePath: false,
      },
      {
        source: "/S6Playlist",
        destination:
          "https://www.youtube.com/playlist?list=PLGnon4Fprkni-PMdPFFLPLObmt_LIF3Z_",
        permanent: false,
        basePath: false,
      },
      {
        source: "/S7Playlist",
        destination:
          "https://www.youtube.com/playlist?list=PLGnon4Fprkni6Pzp9dp9xBNzh_zvArJ2l",
        permanent: false,
        basePath: false,
      },
      {
        source: "/TranquilityCommunityOpenI",
        destination: "https://www.youtube.com/watch?v=P8hH2JnowXM&t=17315s",
        permanent: false,
        basePath: false,
      },
      {
        source: "/TranquilityCommunityOpenII",
        destination:
          "https://www.youtube.com/playlist?list=PLGnon4Fprknh34zcVNBEsvVhiRKaI65rJ",
        permanent: false,
        basePath: false,
      },
      {
        source: "/TranquilityTriathlon",
        destination:
          "https://www.youtube.com/playlist?list=PLGnon4FprknilMYqaMvk_0tjFoeYTZAq8",
        permanent: false,
        basePath: false,
      },
    ];
  },
};
