import React from 'react';
import {Button, StyleSheet, Text, View, ScrollView} from 'react-native';
import {authorize, getUserArtistsPromise} from './spotify-api-client';
import ArtistaFavorito from './ArtistaFavorito';

export default class App extends React.Component {
  state = {
    result: null,
    loggedIn: false,
  };

  // NOTA: esta sería la versión de `componentDidMount` usando async/await
  //
  // async componentDidMount() {
  //   const accessToken = await Expo.SecureStore.getItemAsync(SECURE_STORE_ACCESS_TOKEN_KEY)
  //   if (accessToken) {
  //     this.setState({ accessToken })
  //   }
  // }

  _handleAuthButtonPress = () => {
    authorize ().then (loggedIn => {
      console.warn ('esta logueado?', loggedIn);
      this.setState ({loggedIn});
    });
  };

  // NOTA: esta sería la versión de `_handleAuthButtonPress` usando async/await
  //
  // _handleAuthButtonPress = async () => {
  //   const redirectUrl = AuthSession.getRedirectUrl()

  //   const result = await AuthSession.startAsync({
  //     authUrl:
  //       `https://accounts.spotify.com/authorize?response_type=token` +
  //       `&client_id=${SPOTIFY_CLIENT_ID}` +
  //       `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
  //       `&scope=user-follow-read`,
  //   })

  //   await this.handleAuthResult(result)
  // }

  // NOTA: esta sería la versión de `handleAuthResult` usando async/await
  //
  // handleAuthResult = async ({ type, params }) => {
  //   if (type !== 'success') {
  //     console.warn('Algo salió mal', result)
  //     return
  //   }

  //   const accessToken = params.access_token

  //   await Expo.SecureStore.setItemAsync(SECURE_STORE_ACCESS_TOKEN_KEY, accessToken)
  //   this.setState({ accessToken })
  // }

  _handleGetArtistsPress = () => {
    getUserArtistsPromise ().then (artistas => this.setState ({artistas}));
  };

  render () {
    const {loggedIn, artistas} = this.state;

    console.warn ('artistas', artistas);

    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
        >
          {artistas &&
            artistas.map (artist => (
              <ArtistaFavorito artista={artist} key={artist.nombre} />
            ))}
        </ScrollView>
        <View style={styles.buttonsContainer}>
          <Button
            title="Login con Spotify"
            onPress={this._handleAuthButtonPress}
          />
          <Button
            disabled={!loggedIn}
            title="Ver favoritos"
            onPress={this._handleGetArtistsPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    minHeight: 45,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000000C0',
  },

  scrollView: {
    flex: 1,
    width: '100%',
  },

  scrollViewContent: {
    alignItems: 'center',
    paddingTop: 20,
  },
});
