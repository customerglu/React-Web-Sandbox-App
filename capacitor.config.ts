import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.customerglu.webapp',
  appName: 'CGWEbApp',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'https://web-sdk-testing.vercel.app/',  // Replace this with your local IP
    cleartext: true
  }
};

export default config;
