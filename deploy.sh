#!/bin/bash

echo "Iniciando proceso de despliegue..."

# Cambiar al directorio donde se clonará el repositorio
cd /home/estudiante/Desktop || exit 1

# Clonar el repositorio (si ya existe, lo eliminamos primero)
if [ -d "front-client" ]; then
    echo "Eliminando el directorio existente de front-client..."
    rm -rf front-client
fi

echo "Clonando el repositorio..."
git clone https://github.com/InnovaTech-arquitectura/front-client.git

# Cambiar al directorio del repositorio clonado
cd front-client || exit 1

# Instalar dependencias y construir el proyecto Angular
echo "Instalando dependencias de npm..."
npm install

echo "Construyendo la aplicación Angular..."
# Establecer la variable de entorno para el build
if [[ $1 == "production" ]]; then
    export ENVIRONMENT=production
    export SERVER_NAME=10.43.100.206
else
    export ENVIRONMENT=testing
    export SERVER_NAME=10.43.101.180
fi

# Imprimir el entorno y el servidor configurados
echo "Entorno de ejecución: $ENVIRONMENT"
echo "Servidor configurado: $SERVER_NAME"

# Ejecutar docker-compose con el argumento de entorno
echo "Iniciando el contenedor con la nueva imagen..."
docker compose build --build-arg ENV=$ENVIRONMENT
docker compose up -d

# Esperar unos segundos para asegurarse de que el contenedor esté activo
sleep 5

# Reiniciar el contenedor de Nginx
echo "Reiniciando el contenedor de Nginx..."
docker restart front-client-container

# Verificar el estado de los contenedores
echo "Comprobando estado de los contenedores..."
docker ps

echo "Despliegue completado."
