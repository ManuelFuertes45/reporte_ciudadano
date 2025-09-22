import { ReportForm } from '@/components/ReportForm'; // Modal form for submitting a new report
import { IconSymbol } from '@/components/ui/IconSymbol'; // Custom icon component
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Type definition for a report object
type Report = {
  id: number;
  title: string;
  description: string;
  status: string;
  created_by: number;
  validated_by: number | null;
  resolved_by: number | null;
  created_at: string;
  resolved_at: string | null;
  location: number;
  image_url: string;
  rating: number;
};

const offset = 300; // Used to position icons and elements horizontally

const report = () => {
  const [modalVisible, setModalVisible] = useState(false); // Controls visibility of the report form modal
  const [reports, setReports] = useState<Report[]>([]);    // Stores fetched reports

  // Fetch reports from backend when component mounts
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch('http://192.168.4.22:5000/report'); // API call to Flask backend
        const data = await response.json();
        setReports(data); // Save reports to state
      } catch (error) {
        console.error('❌ Failed to fetch reports:', error);
      }
    };

    fetchReports();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* Top bar with search, input box, and add icon */}
      <View style={styles.topBar}>
        <IconSymbol
          name="search"
          size={30}
          color="#ffffff"
          style={[styles.searchIcon, { left: offset }]} // Positioned using offset
        />
        <View style={[styles.rectangleBox, { left: offset + 40 }]} /> {/* White input box */}
        <TouchableOpacity onPress={() => setModalVisible(true)}> {/* Opens modal on press */}
          <IconSymbol
            name="add"
            size={30}
            color="#ffffff"
            style={[styles.addIcon, { right: offset }]} // Positioned using offset
          />
        </TouchableOpacity>
      </View>

      {/* Filter icon below top bar */}
      <IconSymbol
        name="filter-list"
        size={30}
        color="#5a5a5aff"
        style={[styles.filterIcon, { right: offset + 40 }]}
      />

      {/* Scrollable list of report cards */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {reports.map((report) => (
          <View key={report.id} style={styles.rectangleContainer}>
            {/* User info row */}
            <View style={styles.iconRow}>
              <IconSymbol name="account-circle" size={100} color="#5a5a5aff" />
              <View style={styles.textContainer}>
                <Text style={styles.accountText}>User {report.created_by}</Text>
                <View style={styles.subTextRow}>
                  <Text style={styles.subText}>{report.status}</Text>
                </View>
              </View>
            </View>

            {/* Report card with icons and title */}
            <View style={styles.scrollRectangle}>
              <IconSymbol
                name="image"
                size={200}
                color="#5a5a5aff"
                style={{ position: 'absolute', top: -10, left: '5%', marginLeft: -40 }}
              />
              <Text style={styles.titleText}>{report.title}</Text>
              <IconSymbol
                name="build"
                size={70}
                color="#5a5a5aff"
                style={{ position: 'absolute', top: 75, right: 230 }}
              />
              <IconSymbol
                name="arrow-drop-down"
                size={40}
                color="#5a5a5aff"
                style={{ position: 'absolute', bottom: 5, left: 500 }}
              />
              <IconSymbol
                name="arrow-drop-up"
                size={40}
                color="#5a5a5aff"
                style={{ position: 'absolute', bottom: 3, left: 515 }}
              />
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Modal form for submitting a new report */}
      <ReportForm visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
};

// Styles for layout and positioning
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
    top: 10,
  },
  addIcon: {
    position: 'absolute',
    top: -13,
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