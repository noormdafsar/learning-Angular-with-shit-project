#!/bin/bash

set -e

ENV_FILE_DIR="src/environments"
[ -d "$ENV_FILE_DIR" ] || mkdir -p "$ENV_FILE_DIR"

PROD_ENV_FILE_PATH="src/environments/environment.prod.ts"
ENV_FILE_PATH="src/environments/environment.ts"

echo "Preparing environment file..."

[ -f "$PROD_ENV_FILE_PATH" ] && rm "$PROD_ENV_FILE_PATH"

# Create an dummy environment file if it doesn't exist, otherwise angular file replacement will fail
[ -f "$ENV_FILE_PATH" ] && cat "$ENV_FILE_PATH"

cat <<EOF > $PROD_ENV_FILE_PATH
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