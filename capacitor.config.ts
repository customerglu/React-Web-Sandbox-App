import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.customerglu.webapp',
  appName: 'CGWEbApp',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.29.184:5173',  // Replace this with your local IP
    cleartext: true
  }
};

export default config;
