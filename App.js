import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import styles from "@styles";
import PlayersContainer from "@containers/Players";
import ChatsContainer from "@containers/Chats";
import DicesContainer from "@containers/Dices";
import ResultsContainer from "@containers/Results";
import { Provider } from 'react-redux'
import store from 'src/store/store'

export default function App() {
  return (
  <Provider store={store}>
    <View style={styles.wrapperContainer}>
      <StatusBar style="auto" />
      <ScrollView>
        <PlayersContainer />
        <ChatsContainer />
        <DicesContainer />
        <ResultsContainer />
      </ScrollView>
    </View>
  </Provider>
  );
}
