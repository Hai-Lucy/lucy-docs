import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra({
  redirects: async () => [
    {
      source: "/discord",
      destination: "https://discord.gg/WFfjrQxnfH",
      permanent: false,
    },
    {
      source: "/invite",
      destination:
        "https://discord.com/api/oauth2/authorize?client_id=928966154817523723&permissions=964756499798&redirect_uri=https%3A%2F%2Fdash-lucy.is-a.fun%2Fapi%2Fcallback&response_type=code&scope=bot%20applications.commands%20guilds",
      permanent: false,
    },
  ],
});
