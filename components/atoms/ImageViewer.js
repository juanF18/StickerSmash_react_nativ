import { Image, StyleSheet } from "react-native";

export function ImageViewer({ sourceImage }) {
  return <Image source={sourceImage} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
