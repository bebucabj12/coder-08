import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class ArtistaFavorito extends React.Component {
  render() {
    const {
      artista: { nombre, imagen, seguidores },
    } = this.props

    return (
      <View style={[styles.container, styles.conSombra]}>
        <Image source={{ uri: imagen }} style={styles.imagen} />
        <View style={styles.dataContainer}>
          <Text style={styles.nombre}>{nombre}</Text>
          <Text style={styles.seguidores}>🌟 {seguidores}</Text>
        </View>
      </View>
    )
  }
}

ArtistaFavorito.propTypes = {
  artista: PropTypes.shape({
    nombre: PropTypes.string,
    imagen: PropTypes.string,
    seguidores: PropTypes.number,
  }),
}

ArtistaFavorito.defaultProps = {
  artista: {},
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 350,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    marginVertical: 7,
    flexDirection: 'row',
  },

  nombre: {
    marginVertical: 5,
    marginHorizontal: 10,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },

  seguidores: {
    marginVertical: 5,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '300',
  },

  imagen: {
    height: 150,
    width: 150,
  },

  conSombra: {
    shadowColor: 'black',
    shadowOffset: {
      height: 2,
      width: 1,
    },
    shadowRadius: 1.5,
    shadowOpacity: 0.4,
    elevation: 2,
  },

  dataContainer: {
    flex: 1,
  },
})
