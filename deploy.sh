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

# Detener y eliminar contenedores existentes
echo "Deteniendo y eliminando contenedores existentes..."
docker-compose down

# Limpiar imágenes huérfanas y no utilizadas
echo "Limpiando imágenes de Docker no utilizadas..."
docker image prune -f

# Ejecutar docker-compose con el argumento de entorno
echo "Levantando el contenedor con docker-compose..."
docker-compose up --build -d

echo "Reiniciando Nginx en el contenedor..."
docker exec front-client-container nginx -s reload

echo "Despliegue completado."
