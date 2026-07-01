#!/bin/sh
set -e

# Injeta variáveis de ambiente em runtime substituindo placeholders no index.html
# Útil se no futuro precisar de VITE_API_URL etc. sem rebuild
# Por ora apenas executa o comando recebido
exec "$@"
