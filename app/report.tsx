import { ReportForm } from '@/components/ReportForm';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const offset = 300;

const report = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {/* Top Bar with Icons */}
      <View style={styles.topBar}>
        <IconSymbol
          name="search"
          size={30}
          color="#ffffff"
          style={[styles.searchIcon, { left: offset }]}
        />
        <View style={[styles.rectangleBox, { left: offset + 40 }]} />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <IconSymbol
            name="add"
            size={30}
            color="#ffffff"
            style={[styles.addIcon, { right: offset }]}
          />
        </TouchableOpacity>
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
                  top: 75,
                  right: 230,
                }}
              />
              <IconSymbol
                name="arrow-drop-down"
                size={40}
                color="#5a5a5aff"
                style={{
                  position: 'absolute',
                  bottom: 5,
                  left: 500,
                }}
              />
              <IconSymbol
                name="arrow-drop-up"
                size={40}
                color="#5a5a5aff"
                style={{
                  position: 'absolute',
                  bottom: 3,
                  left: 515,
                }}
              />
            </View>
          </View>
        ))}
      </ScrollView>

      {/* ✅ Modal goes here */}
      <ReportForm visible={modalVisible} onClose={() => setModalVisible(false)} />
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
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    top: 10, // adjust independently
  },
  addIcon: {
    position: 'absolute',
    top: -13, // adjust independently
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
    bottom: 130,
    left: 300,
    fontSize: 25,
    color: '#5a5a5aff',
    fontWeight: '500',
  },
});

export default report;
