import { StyleSheet, View } from "react-native";
import { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";

const Spinner: React.FC = () => {
  const animation = useRef<LottieView | null>(null);
  useEffect(() => {
    animation.current?.pause();
    animation.current?.reset();
    setTimeout(() => animation.current?.play(), 50);
  }, []);

  return (
    <View style={styles.activityIndicator}>
      <LottieView
        ref={animation}
        source={require("../../assets/animations/loading.json")}
        loop
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    marginVertical: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  animation: {
    height: 80,
    width: 300,
  },
});

export default Spinner;
