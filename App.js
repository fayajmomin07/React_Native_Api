import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ApiNavigation from './src/apiproject/navigation/ApiNavigation';
import MovieNavigation from './src/movieapp/navigations/MovieNavigation';
import PortfolioNavigation from './src/portfolioapp/navigation/PortfolioNavigation';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{fontSize:30, color:'darkgreen', fontWeight:'bold'}}>React Native App</Text>


      {/* React native first project based on API's */}
      {/* <ApiNavigation /> */}





      {/* React native second project based on TMDB Movies API's */}
       <MovieNavigation />






      {/* React native third port folio project based static data*/}
      {/* <PortfolioNavigation /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
