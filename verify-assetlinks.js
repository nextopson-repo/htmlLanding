#!/usr/bin/env node

const https = require('https');
const http = require('http');
const fs = require('fs');

const url = 'https://nextdeal.in/.well-known/assetlinks.json';

console.log('🔍 Verifying Android App Links setup...');
console.log(`📡 Testing URL: ${url}`);
console.log('');

function testUrl(testUrl) {
  return new Promise((resolve, reject) => {
    const client = testUrl.startsWith('https') ? https : http;
    
    client.get(testUrl, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data: data
        });
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

function testLocalFile() {
  try {
    const localData = fs.readFileSync('.well-known/assetlinks.json', 'utf8');
    const jsonData = JSON.parse(localData);
    return {
      success: true,
      data: jsonData,
      rawData: localData
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

async function verifyAssetLinks() {
  console.log('📁 Testing local file...');
  const localResult = testLocalFile();
  
  if (localResult.success) {
    console.log('✅ Local file is valid JSON');
    console.log('📱 Package Name:', localResult.data[0]?.target?.package_name);
    console.log('🔗 Relations:', localResult.data[0]?.relation);
    console.log('🔐 Certificate Fingerprints:', localResult.data[0]?.target?.sha256_cert_fingerprints?.length || 0, 'fingerprints found');
    if (localResult.data[0]?.target?.sha256_cert_fingerprints) {
      localResult.data[0].target.sha256_cert_fingerprints.forEach((fp, index) => {
        console.log(`   ${index + 1}. ${fp}`);
      });
    }
  } else {
    console.log('❌ Local file error:', localResult.error);
  }
  
  console.log('\n🌐 Testing live URL...');
  try {
    const result = await testUrl(url);
    
    console.log('✅ Status Code:', result.statusCode);
    console.log('📋 Content-Type:', result.headers['content-type']);
    console.log('🌐 CORS Headers:', {
      'Access-Control-Allow-Origin': result.headers['access-control-allow-origin'],
      'Access-Control-Allow-Methods': result.headers['access-control-allow-methods']
    });
    console.log('');
    
    if (result.statusCode === 200) {
      console.log('✅ File is accessible!');
      
      if (result.headers['content-type'] && result.headers['content-type'].includes('application/json')) {
        console.log('✅ Correct MIME type (application/json)');
      } else {
        console.log('⚠️  Warning: MIME type may not be correct');
        console.log('   Expected: application/json');
        console.log('   Received:', result.headers['content-type']);
      }
      
      try {
        const jsonData = JSON.parse(result.data);
        console.log('✅ Valid JSON format');
        console.log('📱 Package Name:', jsonData[0]?.target?.package_name);
        console.log('🔗 Relations:', jsonData[0]?.relation);
        console.log('🔐 Certificate Fingerprints:', jsonData[0]?.target?.sha256_cert_fingerprints?.length || 0, 'fingerprints found');
        if (jsonData[0]?.target?.sha256_cert_fingerprints) {
          jsonData[0].target.sha256_cert_fingerprints.forEach((fp, index) => {
            console.log(`   ${index + 1}. ${fp}`);
          });
        }
      } catch (e) {
        console.log('❌ Invalid JSON format');
      }
    } else {
      console.log('❌ File is not accessible');
    }
    
  } catch (error) {
    console.log('❌ Error testing URL:', error.message);
  }
}

verifyAssetLinks(); 