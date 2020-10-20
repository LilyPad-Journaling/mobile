import ExpoMixpanelAnalytics from '@benawad/expo-mixpanel-analytics';

const analytics = new ExpoMixpanelAnalytics('mixpanel-token');

exports.mp = analytics;