let { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_CALLBACK_URL, SERVER_SESSION_SECRET, BASEAPI, PORT, MONGO_CONNECTION_STRING, MONGO_DB_NAME } = process.env;
if (!FORGE_CLIENT_ID || !FORGE_CLIENT_SECRET || !FORGE_CALLBACK_URL || !SERVER_SESSION_SECRET) {
  console.warn('Missing some of the environment variables.');
  process.exit(1);
}
const INTERNAL_TOKEN_SCOPES = ['data:read'];
const PUBLIC_TOKEN_SCOPES = ['viewables:read'];
PORT = PORT || 8080;

module.exports = {
  FORGE_CLIENT_ID,
  FORGE_CLIENT_SECRET,
  FORGE_CALLBACK_URL,
  SERVER_SESSION_SECRET,
  INTERNAL_TOKEN_SCOPES,
  PUBLIC_TOKEN_SCOPES,
  BASEAPI,
  PORT,
  MONGO_CONNECTION_STRING,
  MONGO_DB_NAME
};