import { BlurTint, BlurView } from "expo-blur";
import { ImageBackground, StyleSheet, Text } from "react-native";

export default function FrostedCard() {
  return (
    <ImageBackground
      source={{ uri: "https://source.unsplash.com/800x600/?abstract" }}
      style={styles.background}
    >
      <BlurView intensity={60} tint="light" style={styles.card}>
        <Text style={styles.title}>Liquid Glass UI</Text>
        <Text style={styles.text}>Elegant. Soft. Modern.</Text>
      </BlurView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: "center", alignItems: "center" },
  card: {
    width: 300,
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  title: { fontSize: 22, fontWeight: "600", color: "#fff" },
  text: { fontSize: 16, color: "#f2f2f2" },
});

export const GlassContainer = ({
  children,
  blur = 50,
  tint = "dark",
  contanierCls,
}: {
  children: React.ReactNode;
  blur: number;
  tint: BlurTint;
  contanierCls: string;
}) => (
  <BlurView
    intensity={blur}
    tint={tint}
    style={{
      backgroundColor: "transparent",
      padding: 16,
      overflow: "hidden",
    }}
    className={`w-full h-full  ${contanierCls} `}
  >
    {children}
  </BlurView>
);
