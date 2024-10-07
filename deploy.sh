#!/bin/bash

echo "Iniciando proceso de despliegue..."

# Cambiar al directorio donde se clonará el repositorio
cd /home/estudiante/Desktop || exit 1

# Clonar el repositorio (si ya existe, lo eliminamos primero)
if [ -d "front-admin" ]; then
    echo "Eliminando el directorio existente de front-admin..."
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
else
    export ENVIRONMENT=testing
fi

# Ejecutar docker-compose con el argumento de entorno
docker-compose up --build -d

echo "Reiniciando Nginx en el contenedor..."
docker exec front-client-container nginx -s reload

echo "Despliegue completado."
