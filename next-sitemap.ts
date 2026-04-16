import { IConfig } from 'next-sitemap';

const config: IConfig = {
  siteUrl: 'https://sinneogroup.co.za',
  generateRobotsTxt: true,
  outDir: './public', // must be ./public so Next.js can serve
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};

export default config;