#!/usr/bin/env node

const https = require('https');
const http = require('http');

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

async function verifyAssetLinks() {
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