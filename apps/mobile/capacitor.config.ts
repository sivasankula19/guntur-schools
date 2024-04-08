import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gunturdevelopers',
  appName: 'mobile',
  webDir: '../../dist/apps/mobile',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
