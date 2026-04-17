#!/bin/bash

set -e

FILE_PATH="src/environments/environment.prod.ts"

echo "Preparing environment file..."

[ -f "$FILE_PATH" ] && rm "$FILE_PATH"

cat <<EOF > $FILE_PATH
export const environment = {
  production: true,
  apiUrl: '${API_URL}',
  appType: '${APP_TYPE}',
  appVersion: '${APP_VERSION}',
  enableDebugMode: ${DEBUG_MODE},
  enableConsoleLogs: ${DEBUG_MODE},
  encryptionEnabled: false,
  tokenRefreshThreshold: 5
};
EOF

echo "Environment file created successfully"