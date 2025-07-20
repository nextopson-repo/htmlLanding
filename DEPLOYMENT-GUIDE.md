# Android App Links Setup for AWS Amplify

This guide will help you set up Android App Links for your Nextdeal app on AWS Amplify.

## 📁 Files Created

1. `.well-known/assetlinks.json` - The main Android App Links configuration file
2. `amplify.yml` - Amplify build configuration with proper headers
3. `_redirects` - Redirect rules for proper file serving
4. `verify-assetlinks.js` - Verification script to test the setup

## 🚀 Deployment Steps

### Step 1: Commit and Push to Repository

```bash
# Add all files to git
git add .

# Commit the changes
git commit -m "Add Android App Links configuration for nextdeal.in"

# Push to your repository
git push origin main
```

### Step 2: Deploy to AWS Amplify

1. **Go to AWS Amplify Console**
   - Navigate to your Amplify app
   - The build should start automatically after pushing

2. **Monitor the Build**
   - Check the build logs to ensure no errors
   - Verify that all files are being deployed

3. **Wait for Deployment**
   - Build typically takes 2-5 minutes
   - You'll see a green checkmark when complete

### Step 3: Verify the Setup

After deployment, test your setup:

```bash
# Run the verification script
node verify-assetlinks.js
```

Or manually test:
```bash
# Test the URL directly
curl -I https://nextdeal.in/.well-known/assetlinks.json
```

## ✅ Expected Results

After successful deployment, you should see:

- **Status Code**: 200 OK
- **Content-Type**: `application/json`
- **CORS Headers**: Properly set for cross-origin requests
- **JSON Content**: Valid JSON with your app configuration

## 🔧 Troubleshooting

### Issue: File not accessible (404)
- Check if `.well-known` folder is in the root directory
- Verify the file path is correct
- Ensure the build completed successfully

### Issue: Wrong MIME type
- Check the `amplify.yml` configuration
- Verify custom headers are applied
- Clear browser cache and test again

### Issue: CORS errors
- Verify CORS headers in `amplify.yml`
- Test with different browsers
- Check if your domain is properly configured

## 📱 Android App Configuration

In your Android app, ensure you have:

1. **Intent Filters** in `AndroidManifest.xml`:
```xml
<activity android:name=".MainActivity">
    <intent-filter android:autoVerify="true">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="https" android:host="nextdeal.in" />
    </intent-filter>
</activity>
```

2. **Handle Deep Links** in your app code to parse incoming URLs

## 🔍 Testing Deep Links

1. **Install your app** on an Android device
2. **Test with ADB**:
   ```bash
   adb shell am start -W -a android.intent.action.VIEW -d "https://nextdeal.in/property/123" com.nextdeal
   ```
3. **Test in browser**: Visit `https://nextdeal.in/property/123` and click the link

## 📞 Support

If you encounter issues:
1. Check the Amplify build logs
2. Verify the file is accessible via browser
3. Test with the verification script
4. Check Android Studio's App Links Assistant

## 🔄 Updates

To update the configuration:
1. Modify `.well-known/assetlinks.json`
2. Commit and push changes
3. Amplify will automatically redeploy
4. Test with the verification script 