import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from "react-native";

export default function Presentacion() {
  const abrirLink = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("No se puede abrir el link:", url);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        
        {/* Foto LOCAL */}
        <Image
          source={require("./assets/foto.png")}
          style={styles.foto}
        />

        {/* Nombre */}
        <Text style={styles.nombre}>Felipe Pautasso</Text>

        {/* Descripción */}
        <Text style={styles.descripcion}>17 años - Estudiante</Text>

        {/* Intereses */}
        <Text style={styles.intereses}>
          Programación · Ciberseguridad · PCs
        </Text>

        {/* Redes */}
        <View style={styles.redes}>
          <TouchableOpacity onPress={() => abrirLink("https://www.tiktok.com/@feli__9?_r=1&_t=ZS-95aJvZ6TAbS")}>
            <Text style={styles.link}>TikTok</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => abrirLink("https://www.instagram.com/felipepautasso_?igsh=M2plNzZ3Z2E1c29v&utm_source=qr")}>
            <Text style={styles.link}>Instagram</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#1e1e1e",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    width: 300,
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  nombre: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  descripcion: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 10,
  },
  intereses: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 15,
    textAlign: "center",
  },
  redes: {
    flexDirection: "row",
    gap: 15,
  },
  link: {
    color: "#4da6ff",
    fontSize: 14,
  },
});