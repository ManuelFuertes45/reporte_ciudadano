import { IconSymbol } from '@/components/ui/IconSymbol';
import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type Props = {
  visible: boolean;
  onClose: () => void;
};

export const ReportForm: React.FC<Props> = ({ visible, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async () => {
    try {
      const payload = {
        title,
        description,
        status: 'open',
        created_by: parseInt(createdBy),
        validated_by: null,
        resolved_by: null,
        created_at: new Date(),
        resolved_at: null,
        location: parseInt(location),
        image_url: imageUrl,
        rating: 0,
      };

      const response = await fetch('http://192.168.4.22:5000/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('✅ Report inserted:', result);
        resetForm();
        onClose();
      } else {
        console.error('❌ Failed to insert report:', result);
      }
    } catch (error) {
      console.error('❌ Error submitting report:', error);
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setCreatedBy('');
    setLocation('');
    setImageUrl('');
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Create New Report</Text>

          <TextInput placeholder="Title" value={title} onChangeText={setTitle} style={styles.input} />
          <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.input} />
          <TextInput placeholder="Created by (civilian ID)" value={createdBy} onChangeText={setCreatedBy} keyboardType="numeric" style={styles.input} />
          <TextInput placeholder="Location ID" value={location} onChangeText={setLocation} keyboardType="numeric" style={styles.input} />
          <TextInput placeholder="Image URL" value={imageUrl} onChangeText={setImageUrl} style={styles.input} />

          <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
            <Text style={styles.submitText}>Submit Report</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <IconSymbol name="close" size={24} color="#ff0000ff" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    position: 'relative',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
