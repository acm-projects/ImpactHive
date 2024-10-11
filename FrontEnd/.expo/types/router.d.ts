/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(start)` | `/(start)/goal` | `/(start)/log-in` | `/(start)/opening-interests` | `/(start)/opening-screen` | `/(start)/sign-up` | `/(sub)` | `/(sub)/badges` | `/(sub)/badges-sub` | `/(sub)/interests` | `/(sub)/watch-list` | `/(tabs)` | `/(tabs)/dashboard` | `/(tabs)/home` | `/_sitemap` | `/badges` | `/badges-sub` | `/dashboard` | `/goal` | `/home` | `/interests` | `/log-in` | `/opening-interests` | `/opening-screen` | `/sign-up` | `/watch-list`;
      DynamicRoutes: `/search/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/search/[query]`;
    }
  }
}
