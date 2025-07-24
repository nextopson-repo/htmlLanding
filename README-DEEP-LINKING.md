# Nextdeal Deep Linking Setup

This document explains the deep linking implementation for the Nextdeal app.

## Overview

Deep linking allows users to click on URLs that automatically open your mobile app instead of the web browser. This implementation includes Android App Links for seamless app navigation.

**Note**: The deep linking setup section is hidden from public view on the website but remains accessible for Play Store validation and search engines.

## Files Structure

```
├── assetlinks.json                    # Main asset links file
├── .well-known/
│   └── assetlinks.json               # Asset links file for web server
├── deep-link-test.html               # Test page for deep links
├── index.html                        # Main page with deep linking section (hidden)
└── Style.css                         # Styles for deep linking UI
```

## Implementation Details

### 1. Asset Links Configuration

The `assetlinks.json` file contains the configuration for Android App Links:

```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.nextdeal",
      "sha256_cert_fingerprints": [
        "A9:34:50:3D:C1:8D:9D:49:86:95:90:96:6E:C6:C8:7A:8F:18:C0:80:EF:DA:63:19:23:EA:DE:F3:EC:88"
      ]
    }
  }
]
```

### 2. Public Visibility

The deep linking setup section is hidden from public view using CSS:

```css
.hidden-deep-linking {
  display: none !important;
  visibility: hidden !important;
  /* Additional hiding properties */
}
```

However, the section remains:
- **Accessible to search engines** for indexing
- **Available for Play Store validation** 
- **Functional for screen readers** (accessibility compliance)
- **Visible in print media** for documentation

### 3. Deep Link Schemes

The app supports the following deep link schemes:

- `nextdeal://property/{id}` - Open specific property
- `nextdeal://search?location={location}&type={type}` - Search with parameters
- `nextdeal://profile` - User profile
- `nextdeal://profile/settings` - Profile settings
- `nextdeal://favorites` - User favorites
- `nextdeal://bookmarks` - User bookmarks

### 3. Web URLs

The app also handles web URLs that will open the app if installed:

- `https://nextdeal.in/property/{id}`
- `https://nextdeal.in/search?location={location}&type={type}`

## Setup Instructions

### Step 1: Download JSON File
1. Click the download button in the deep linking section
2. Save the `assetlinks.json` file

### Step 2: Publish to Web Server
1. Upload the `assetlinks.json` file to your web server
2. Make it accessible at: `https://nextdeal.in/.well-known/assetlinks.json`
3. Ensure the file is served with `Content-Type: application/json`

### Step 3: Enable Deep Linking
1. Click the "Enable deep linking" button
2. This will verify the setup and enable the association

## Testing

### Test Page
Visit `deep-link-test.html` to test various deep link scenarios:

1. **Property Links**: Test opening specific properties
2. **Search Links**: Test search functionality with parameters
3. **Profile Links**: Test user profile navigation
4. **Favorites**: Test favorites and bookmarks

### Manual Testing
1. Ensure the Nextdeal app is installed on your device
2. Click on any test link
3. The app should open automatically if deep linking is configured correctly
4. If the app doesn't open, you'll be redirected to the web version

## Android App Configuration

In your Android app, you'll need to:

1. **Add Intent Filters** in your `AndroidManifest.xml`:

```xml
<activity android:name=".MainActivity">
    <intent-filter android:autoVerify="true">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="https" android:host="nextdeal.in" />
    </intent-filter>
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="nextdeal" />
    </intent-filter>
</activity>
```

2. **Handle Deep Links** in your app code to parse the incoming URLs and navigate to the appropriate screens.

## Security Considerations

- The SHA256 certificate fingerprint must match your app's signing certificate
- Only use the production certificate fingerprint for production builds
- Test with debug certificate fingerprint during development
- Ensure your web server serves the assetlinks.json file securely over HTTPS

## Troubleshooting

### Common Issues

1. **App doesn't open**: Check that the certificate fingerprint matches your app
2. **Web fallback not working**: Ensure your web URLs are properly configured
3. **Deep linking not working**: Verify the assetlinks.json file is accessible at the correct URL

### Debug Steps

1. Check browser console for any errors
2. Verify the assetlinks.json file is accessible via browser
3. Test with Android Debug Bridge (ADB) for app verification
4. Use Android Studio's App Links Assistant for debugging

## Support

For technical support or questions about the deep linking implementation, please refer to the Android App Links documentation or contact the development team. 