import { IconSymbol } from '@/components/ui/IconSymbol';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const Home = () => {
  // Horizontal spacing between bell and gear icons relative to the profile icon
  const horizontalOffset = 150;

  // Profile icon configuration
  const profileIconSize = 200;
  const profileIconColor = '#5a5a5aff';

  // Get screen width to center the profile icon dynamically
  const screenWidth = Dimensions.get('window').width;

  // Position profile icon in the center horizontally and slightly from the top
  const profileIconPosition = {
    top: 20,
    left: (screenWidth - profileIconSize) / 2,
  };

  // Calculate the horizontal center of the profile icon
  const profileCenter = profileIconPosition.left + profileIconSize / 2;

  // Bell icon configuration and position (right of profile icon)
  const bellIconSize = 50;
  const bellIconColor = '#5a5a5aff';
  const bellIconPosition = {
    top: 5,
    left: profileCenter + horizontalOffset - bellIconSize / 2,
  };

  // Gear icon configuration and position (left of profile icon)
  const gearIconSize = 50;
  const gearIconColor = '#5a5a5aff';
  const gearIconPosition = {
    top: 5,
    left: profileCenter - horizontalOffset - gearIconSize / 2,
  };

  // Pencil icon configuration and position (bottom-right of profile icon)
  const pencilIconSize = 30;
  const pencilIconColor = '#5a5a5aff';
  const pencilIconPosition = {
    top: 180,
    left: profileIconPosition.left + profileIconSize,
  };

  return (
    <View style={styles.container}>
      {/* Profile icon */}
      <IconSymbol
        name="account-circle"
        size={profileIconSize}
        color={profileIconColor}
        style={[styles.icon, profileIconPosition]}
      />

      {/* Username text below profile icon */}
      <Text style={[styles.userName, { top: profileIconPosition.top + profileIconSize + 10 }]}>
        Manuel Fuertes
      </Text>

      {/* Info box: Rules */}
      <View style={[styles.infoBox, { top: profileIconPosition.top + profileIconSize + 70 }]}>
        <View style={styles.infoRow}>
          <IconSymbol name="book" size={24} color="#5a5a5aff" style={styles.infoIcon} />
          <Text style={styles.infoText}>Rules</Text>
        </View>
      </View>

      {/* Info box: History */}
      <View style={[styles.infoBox, { top: profileIconPosition.top + profileIconSize + 140 }]}>
        <View style={styles.infoRow}>
          <IconSymbol name="receipt-long" size={24} color="#5a5a5aff" style={styles.infoIcon} />
          <Text style={styles.infoText}>History</Text>
        </View>
      </View>

      {/* Reliability score centered below info boxes */}
      <View style={[styles.scoreRow, { top: profileIconPosition.top + profileIconSize + 280, left: profileCenter - 45 / 2 }]}>
        <Text style={styles.reliabilityScore}>75 %</Text>
      </View>

      {/* Notification (bell) icon */}
      <IconSymbol
        name="notifications"
        size={bellIconSize}
        color={bellIconColor}
        style={[styles.icon, bellIconPosition]}
      />

      {/* Settings (gear) icon */}
      <IconSymbol
        name="settings"
        size={gearIconSize}
        color={gearIconColor}
        style={[styles.icon, gearIconPosition]}
      />

      {/* Edit (pencil) icon */}
      <IconSymbol
        name="edit"
        size={pencilIconSize}
        color={pencilIconColor}
        style={[styles.icon, pencilIconPosition]}
      />
    </View>
  );
};

// Styles for layout and components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0ff', // Light gray background
  },
  icon: {
    position: 'absolute', // Allows manual positioning
  },
  userName: {
    position: 'absolute',
    alignSelf: 'center', // Centers text horizontally
    fontSize: 25,
    fontWeight: '600',
    color: '#5a5a5aff',
  },
  infoBox: { // Box configuration that holds Rules and History
    position: 'absolute',
    alignSelf: 'center',
    width: 250,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#b6b4b4ff',
  },
  infoText: { // The text inside the boxes (Rules and History)
    fontSize: 20,
    color: '#5a5a5aff',
    textAlign: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Aligns icon and text to the left
  },
  infoIcon: {
    marginRight: 8, // Space between icon and text
  },
  reliabilityScore: { // Edits the size of font and visuals of the reliability score
    fontSize: 40,
    fontWeight: 'bold',
    color: '#5a5a5aff',
  },
  scoreRow: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center', // Centers score number (reliability number)
  },
});

export default Home;
