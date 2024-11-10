const notifier = require('node-notifier');

// Create a system alert
notifier.notify({
  title: 'System Alert',
  message: 'This is a test notification!',
});

// Customize the notification with additional options
notifier.notify({
  title: 'System Alert',
  message: 'This is a test notification!',
  sound: true, // Play a sound with the notification
  wait: true, // Wait for user action before closing the notification
  timeout: 5, // Close the notification after 5 seconds
});