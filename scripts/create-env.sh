#!/bin/bash

set -e

ENV_FILE_DIR="src/environments"
[ -d "$ENV_FILE_DIR" ] || mkdir -p "$ENV_FILE_DIR"

ENV_FILE_PATH="src/environments/environment.ts"

echo "Preparing environment file..."

cat <<EOF > $ENV_FILE_PATH
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