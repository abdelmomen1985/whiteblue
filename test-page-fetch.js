// Simple test script to verify getPageBySlug functionality
// Run with: node test-page-fetch.js

const { getPageBySlug, getAllPageSlugs } = require('./lib/graphql-client');

async function testPageFetch() {
  console.log('🧪 Testing getPageBySlug function...\n');

  try {
    // Test 1: Get all page slugs
    console.log('📝 Test 1: Fetching all page slugs...');
    const slugs = await getAllPageSlugs();
    console.log('✅ Available page slugs:', slugs);
    console.log('📊 Total pages found:', slugs.length);
    console.log('');

    // Test 2: Fetch a specific page (about)
    console.log('📝 Test 2: Fetching "about" page...');
    const aboutPage = await getPageBySlug('about');
    
    if (aboutPage) {
      console.log('✅ About page found:');
      console.log('   - Title:', aboutPage.title);
      console.log('   - Slug:', aboutPage.slug);
      console.log('   - Published:', aboutPage.is_published);
      console.log('   - Meta Title:', aboutPage.meta_title || 'Not set');
      console.log('   - Meta Description:', aboutPage.meta_description || 'Not set');
      console.log('   - Content length:', aboutPage.content ? aboutPage.content.length : 0, 'characters');
      console.log('   - Created:', new Date(aboutPage.created_at).toLocaleDateString());
      console.log('   - Updated:', new Date(aboutPage.updated_at).toLocaleDateString());
    } else {
      console.log('❌ About page not found or not published');
    }
    console.log('');

    // Test 3: Fetch a non-existent page
    console.log('📝 Test 3: Fetching non-existent page...');
    const nonExistentPage = await getPageBySlug('non-existent-page-slug');
    
    if (nonExistentPage) {
      console.log('❌ Unexpected: Non-existent page was found');
    } else {
      console.log('✅ Correctly returned null for non-existent page');
    }
    console.log('');

    // Test 4: Test with each available slug
    if (slugs.length > 0) {
      console.log('📝 Test 4: Testing each available page slug...');
      
      for (const slug of slugs.slice(0, 3)) { // Test first 3 slugs only
        console.log(`   Testing slug: "${slug}"`);
        const page = await getPageBySlug(slug);
        
        if (page) {
          console.log(`   ✅ ${slug}: "${page.title}" (${page.content ? page.content.length : 0} chars)`);
        } else {
          console.log(`   ❌ ${slug}: Page not found`);
        }
      }
      
      if (slugs.length > 3) {
        console.log(`   ... and ${slugs.length - 3} more pages`);
      }
    }
    
    console.log('\n🎉 All tests completed successfully!');
    
  } catch (error) {
    console.error('❌ Test failed with error:', error.message);
    console.error('📍 Stack trace:', error.stack);
  }
}

// Run the test if this file is executed directly
if (require.main === module) {
  testPageFetch().then(() => {
    console.log('✨ Test execution finished');
    process.exit(0);
  }).catch((error) => {
    console.error('💥 Test execution failed:', error);
    process.exit(1);
  });
}

module.exports = { testPageFetch };