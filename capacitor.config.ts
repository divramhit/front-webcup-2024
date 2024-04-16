import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'PWA with NextJS and Capacitor',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
