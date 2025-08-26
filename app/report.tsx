import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const offset = 300;

const Report = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Top Bar with Icons */}
      <View style={styles.topBar}>
        <IconSymbol
          name="search"
          size={30}
          color="#ffffff"
          style={[styles.icon, { left: offset }]}
        />
        <View style={[styles.rectangleBox, { left: offset + 40 }]} />
        <IconSymbol
          name="add"
          size={30}
          color="#ffffff"
          style={[styles.icon, { right: offset }]}
        />
      </View>

      {/* Filter Icon Below Top Bar */}
      <IconSymbol
        name="filter-list"
        size={30}
        color="#5a5a5aff"
        style={[styles.filterIcon, { right: offset + 40 }]}
      />

      {/* Scrollable Content with 5 Rectangles */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {[...Array(5)].map((_, index) => (
          <View key={index} style={styles.rectangleContainer}>
            <View style={styles.iconRow}>
              <IconSymbol
                name="account-circle"
                size={100}
                color="#5a5a5aff"
              />
              <View style={styles.textContainer}>
                <Text style={styles.accountText}>User {index + 1}</Text>
                <View style={styles.subTextRow}>
                  <Text style={styles.subText}>?? %</Text>
                </View>
              </View>
            </View>

            {/* Rectangle with image icon and titleText inside */}
            <View style={styles.scrollRectangle}>
  <IconSymbol
    name="image"
    size={200}
    color="#5a5a5aff"
    style={{
      position: 'absolute',
      top: -10,
      left: '5%',
      marginLeft: -40,
    }}
  />
  <Text style={styles.titleText}>Title</Text>
  <IconSymbol
    name="build"
    size={70}
    color="#5a5a5aff"
    style={{
      position: 'absolute',
      top: 75,     // 👈 adjust vertically
      right: 230,   // 👈 adjust horizontally
    }}
  />
  <IconSymbol
    name="arrow-drop-down"
    size={40}
    color="#5a5a5aff"
    style={{
      position: 'absolute',
      bottom: 5,   // 👈 adjust vertically
      left: 500,     // 👈 adjust horizontally
    }}
  />
  <IconSymbol
    name="arrow-drop-up"
    size={40}
    color="#5a5a5aff"
    style={{
      position: 'absolute',
      bottom: 3,   // 👈 adjust vertically
      left: 515,     // 👈 adjust horizontally
    }}
  />
</View>

          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    height: 50,
    backgroundColor: '#5a5a5aff',
    borderBottomWidth: 3,
    borderColor: '#5a5a5aff',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    top: 10,
  },
  rectangleBox: {
    position: 'absolute',
    top: 10,
    width: 200,
    height: 30,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  filterIcon: {
    position: 'absolute',
    top: 60,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 80,
  },
  scrollRectangle: {
    height: 180,
    width: '40%',
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    alignSelf: 'center',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangleContainer: {
    marginBottom: 50,
  },
  iconRow: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 450,
  },
  textContainer: {
    marginLeft: 15,
    marginTop: 15,
  },
  accountText: {
    fontSize: 25,
    color: '#5a5a5aff',
    fontWeight: '600',
  },
  subTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  subText: {
    fontSize: 20,
    color: '#5a5a5aff',
  },
  titleText: {
    position: 'absolute',
    bottom: 130, // 👈 adjust this to move vertically
    left: 300,
    fontSize: 25,
    color: '#5a5a5aff',
    fontWeight: '500',
  },
});

export default Report;
