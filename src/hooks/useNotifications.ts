import { useEffect } from "react";
import * as Subscriptions from "expo-notifications";
import {
  registerForPush,
  scheduleDailySummary,
} from "../services/Notifications/notifications";

export function useNotifications() {
  useEffect(() => {
    registerForPush();

    const s1 = Subscriptions.addNotificationReceivedListener((n) =>
      console.log("Recebida em foreground:", n)
    );
    const s2 = Subscriptions.addNotificationResponseReceivedListener(() => {});

    return () => {
      Subscriptions.removeNotificationSubscription(s1);
      Subscriptions.removeNotificationSubscription(s2);
    };
  }, []);

  return { scheduleDailySummary };
}
