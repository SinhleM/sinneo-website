module.exports = {
  siteUrl: 'https://sinneogroup.co.za',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}