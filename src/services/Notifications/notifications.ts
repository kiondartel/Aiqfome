import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export async function registerForPush() {
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.DEFAULT,
    });
  }

  const { status } = await Notifications.getPermissionsAsync();
  let finalStatus = status;
  if (status !== "granted") {
    const req = await Notifications.requestPermissionsAsync();
    finalStatus = req.status;
  }
  if (finalStatus !== "granted") {
    console.warn("Permissão de notificações não concedida");
    return;
  }
  const { data } = await Notifications.getExpoPushTokenAsync();
  console.log("Expo push token:", data);
}

export async function scheduleDailySummary(count: number) {
  await Notifications.cancelAllScheduledNotificationsAsync();

  const body = count
    ? `Você tem ${count} favorito${count > 1 ? "s" : ""}, confira!`
    : "Que tal adicionar alguns produtos aos favoritos?";

  try {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Resumo diário dos favoritos",
        body,
      },
      trigger: {
        seconds: 5,
        repeats: false,
      },
    });
    console.log("Notificação agendada com sucesso!");
  } catch (error) {
    console.error("Erro ao agendar notificação:", error);
  }
}
