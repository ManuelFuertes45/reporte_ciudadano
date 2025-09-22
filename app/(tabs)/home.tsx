import { IconSymbol } from '@/components/ui/IconSymbol';
import { useAuth } from '@/context/AuthContext'; // Import your auth context
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const Home = () => {
  const { user } = useAuth(); // Access the logged-in user

  const horizontalOffset = 150;
  const profileIconSize = 200;
  const profileIconColor = '#5a5a5aff';
  const screenWidth = Dimensions.get('window').width;
  const profileIconPosition = {
    top: 20,
    left: (screenWidth - profileIconSize) / 2,
  };
  const profileCenter = profileIconPosition.left + profileIconSize / 2;

  const bellIconSize = 50;
  const bellIconColor = '#5a5a5aff';
  const bellIconPosition = {
    top: 5,
    left: profileCenter + horizontalOffset - bellIconSize / 2,
  };

  const gearIconSize = 50;
  const gearIconColor = '#5a5a5aff';
  const gearIconPosition = {
    top: 5,
    left: profileCenter - horizontalOffset - gearIconSize / 2,
  };

  const pencilIconSize = 30;
  const pencilIconColor = '#5a5a5aff';
  const pencilIconPosition = {
    top: 180,
    left: profileIconPosition.left + profileIconSize,
  };

  return (
    <View style={styles.container}>
      <IconSymbol
        name="account-circle"
        size={profileIconSize}
        color={profileIconColor}
        style={[styles.icon, profileIconPosition]}
      />

      <Text style={[styles.userName, { top: profileIconPosition.top + profileIconSize + 10 }]}>
        {user?.username || 'User'}
      </Text>

      <View style={[styles.infoBox, { top: profileIconPosition.top + profileIconSize + 70 }]}>
        <View style={styles.infoRow}>
          <IconSymbol name="book" size={24} color="#5a5a5aff" style={styles.infoIcon} />
          <Text style={styles.infoText}>Rules</Text>
        </View>
      </View>

      <View style={[styles.infoBox, { top: profileIconPosition.top + profileIconSize + 140 }]}>
        <View style={styles.infoRow}>
          <IconSymbol name="receipt-long" size={24} color="#5a5a5aff" style={styles.infoIcon} />
          <Text style={styles.infoText}>History</Text>
        </View>
      </View>

      <View style={[styles.scoreRow, { top: profileIconPosition.top + profileIconSize + 280, left: profileCenter - 45 / 2 }]}>
        <Text style={styles.reliabilityScore}>75 %</Text>
      </View>

      <IconSymbol
        name="notifications"
        size={bellIconSize}
        color={bellIconColor}
        style={[styles.icon, bellIconPosition]}
      />

      <IconSymbol
        name="settings"
        size={gearIconSize}
        color={gearIconColor}
        style={[styles.icon, gearIconPosition]}
      />

      <IconSymbol
        name="edit"
        size={pencilIconSize}
        color={pencilIconColor}
        style={[styles.icon, pencilIconPosition]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0ff',
  },
  icon: {
    position: 'absolute',
  },
  userName: {
    position: 'absolute',
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: '600',
    color: '#5a5a5aff',
  },
  infoBox: {
    position: 'absolute',
    alignSelf: 'center',
    width: 250,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#b6b4b4ff',
  },
  infoText: {
    fontSize: 20,
    color: '#5a5a5aff',
    textAlign: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  infoIcon: {
    marginRight: 8,
  },
  reliabilityScore: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#5a5a5aff',
  },
  scoreRow: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Home;
