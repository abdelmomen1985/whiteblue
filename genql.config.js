module.exports = {
  // GraphQL endpoint URL (using real API from Articles.bru)
  endpoint: 'http://34.56.54.244:48085/graphql',
  
  // Output directory for generated files
  output: './src/generated/genql',
  
  // Include scalar types
  scalarTypes: {
    DateTime: 'string',
    JSON: 'any',
    Upload: 'File',
  },
  
  // Headers to include in introspection request
  headers: {
    'Authorization': 'Bearer FkGcOk8Uudxlb41YmUEk4Kd5wPH92vI7',
    'Content-Type': 'application/json',
  },
  
  // Enable verbose logging
  verbose: true,
  
  // Sort generated files
  sort: true,
  
  // Generate react hooks
  reactQueryHooks: false,
  
  // Generate only the client without schema validation
  disableValidation: false,
  
  // Custom fetch function
  // fetch: require('node-fetch'),
}