/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(start)` | `/(start)/goal` | `/(start)/interests` | `/(start)/log-in` | `/(start)/opening-screen` | `/(start)/sign-up` | `/(sub)` | `/(sub)/badges` | `/(sub)/interests` | `/(sub)/watch-list` | `/(tabs)` | `/(tabs)/dashboard` | `/(tabs)/home` | `/_sitemap` | `/badges` | `/dashboard` | `/goal` | `/home` | `/interests` | `/log-in` | `/opening-screen` | `/sign-up` | `/watch-list`;
      DynamicRoutes: `/search/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/search/[query]`;
    }
  }
}
