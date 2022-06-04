// This section sets up some basic app metadata, the entire section is optional.
App.info({
  id: 'com.fosfeno.apps.iching',
  name: 'I Ching',
  description: 'Consultas al libro usando monedas',
  author: 'Pedro A. Góngora',
  email: 'pedro.gongora@gmail.com',
  website: 'https://github.com/pedrogongora'
});

// Set up resources such as icons and launch screens.
App.icons({
  'android_mdpi':    'icons/icon-48x48.png',
  'android_hdpi':    'icons/icon-72x72.png',
  'android_xhdpi':   'icons/icon-96x96.png',
  'android_xxhdpi':  'icons/icon-144x144.png',
  'android_xxxhdpi': 'icons/icon-192x192.png',
});

App.launchScreens({
  'android_mdpi_portrait':  'icons/launch-portrait.9.png',
  'android_mdpi_landscape': 'icons/launch-landscape.9.png',
});

// Set PhoneGap/Cordova preferences.
App.setPreference('BackgroundColor', '0xffffffff');
//App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');
