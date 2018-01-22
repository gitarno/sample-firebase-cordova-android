cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-firebase-analytics.FirebaseAnalytics",
    "file": "plugins/cordova-plugin-firebase-analytics/www/FirebaseAnalytics.js",
    "pluginId": "cordova-plugin-firebase-analytics",
    "merges": [
      "cordova.plugins.firebase.analytics"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-support-google-services": "1.0.0",
  "cordova-plugin-firebase-analytics": "0.12.1",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});