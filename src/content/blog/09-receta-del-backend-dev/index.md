---
title: "Receta para ser backend dev"
description: "Crear software es como cocinar, y para crear los mejores platos hay que seguir una receta"
date: "07/27/2025"
draft: false
---

Crear software es como cocinar, y para crear los mejores platos hay que seguir una receta

Te dejo en orden la receta para que puedas cocinar

# Herramientas

Te dejo las herramientas 

## Docker

Gran herramienta que soluciona la frase "En mi pc funciona". Usamos docker para instalar y configurar un entorno solo para
la aplicación que desarrollamos

Este entorno se puede compartir entre dev's para que todos tengamos las mismas versiones y las mismas dependencias sin tener
que "instalar nada" en nuestro pc

> Video del pelado nerd, que sigue mas vigente que nunca

## Git

CLI que permite llevar el control de versiones del software que creamos

Nos permite trabjar en equipo en una misma base de código

> Creo que los k de codely tienen el video mas corto de git

> El pelades se luce de nuevo con un buen video de introduccion a git
> https://youtu.be/kEPF-MWGq1w?si=8jSxZCCyDRvfMCtP

## Tu editor de confianza

Normalmente uso vscode, es uno de los editores de código mas populares, tiene una buena integracion con IA (con Copilot)
y tiene caleta de plugins para todo

> Link a vscode y puede que ponga una lista de los plugins que uso

A veces, cuando quiero programar "a consciencia", o cuando quiero fixear rapidamente un bug, uso Neovim. Editor super rapido, 
se ejecuta desde la terminal y los vim motions hacen que programar sea muy entretenido

## DBeaver

Cliente gráfico de base de datos, que permite conectarse a muchas bases de datos (MariaDB, MySQL, MSserver, PostgreSQL, etc)

No hay mucho que comentar acá, instálalo y conectate a una base de datos que tengas en tu pc 💪

## Cliente HTTP

La forma que tienes como backend dev para testear tu trabajo es llamando las rutas que creas

Para ello, puedes ocupar un cliente HTTP, los más famosos es Postman o Insomnia. En tus proyectos tambien puedes invertir 
tiempo en configurar una implementacion de swagger. Tambien hay plugins de clientes HTTP en vscode como thunder client

Yo utilizo HTTPie, porque es el único cliente gráfico que corre en Wayland 😢 y cuando quiero hacer un test rápido o un script
en bash tambien ocupo Curl

## Github

La "red social de los programadores", nos permite subir nuestros proyectos e interactuar con los demás dev's

Github flow: el workflow que uso
https://youtu.be/2Xagp86uOuI?si=EjtnwFCEDTDB99li

Como hacer tu primer PR
https://youtu.be/_M8oalUyz10?si=5auJtTBb1f4jWkQv

> Esto se va a ver en la practica a si que no es prioridad estudiarlo por tu cuenta

> Peero si te sobra una hora, puedes invertirla en este video
> https://www.youtube.com/watch?v=niPExbK8lSw

# Lenguajes

## Python

Para python uso un programa de terminal llamado `uv`, ultimamente esta agarrando harta fuerza en el ecosistema python y
apuesto a que la empresa detras de esta detras de esta CLI llamada Astral va a seguir los mismos pasos de Vercel en un futuro

# Frameworks y librerías

## Django

El framework base para crear sitios web monoliticos por excelencia de python, te permite crear sitios web completos ultra rápido
con su combinacion entre ORM, Template engine y "serializers"

Te fuerza a seguir una buena estructura/arquitectura de carpetas, aunque en la pega la hemos modificado un poco, con el fin
del ser pragmáticos pero sin perder la mantenibilidad

## Django Rest Framework

Utiliza la solida base de django para crear API's REST, agregandote:
- Serializers: Que toman una request HTTP o un json y lo decodifica a tipos primitivos de python y viceversa, codifica los 
tipos primitivos de python a json para dar una respuesta
- Routers: Te da una implementación para ordenar tus rutas como tú quieras
- Auth: Puedes proteger tus rutas muy fácil, con un sistema de autenticacion personalizable
- ViewSets: Potentes controladores HTTP, desde los que te dan todo el CRUD listo, hasta los más simples para hacer las 
rutas a gusto del consumidor

## Requests

Un cliente HTTP para hacer llamadas a sistemas externos o otras API's, usando el protocolo de la web
> Para los entendidos del frontend, es como "el axios de python"

## xslxwriter/openpyxl

Librerias para creación y manipulación de archivos excel

xslxwriter te permite generar excels de 0, desde las hojas hasta las celdas

openpyxl te permite leer excels existentes para extraer la información que traen

## Pandas

Es una librería rara, que te facilita la vida en cuanto a la manipulacion y trabajo con datos

La utilizan los cientificos de datos, para generar gráficos, calcular datos predictivos con probabilidades y harta matematica

Nosotros la usamos para 

### 1. Consultar datos en memoria facilmente

Con pandas, se facilitan algunas consultas, casi pareciendose a tener sql pero en memoria

ejemplo sin pandas para obtener todos los alumnos de un instituto mayores de 18 años

```python
# suponiendo que `estudiantes` es una lista con muchos estudiantes
estudiantes_adultos = []
for estudiante in estudiantes:
    if estudiante.get("edad") > 18:
        estudiantes_adultos.append(estudiante)
```

ejemplo con pandas

```python
# suponiendo que `estudiantes` es una DataFrame con muchos estudiantes
estudiantes_adultos = estudiantes[(estudiantes["edad"] > 18)]
```

### 2. Extraer y crear datos de forma trivial

sin pandas

```python
# Sin pandas - extracción de CSV
import csv

# Leer CSV
estudiantes = []
with open('estudiantes.csv', 'r', encoding='utf-8') as archivo:
    lector = csv.DictReader(archivo)
    for fila in lector:
        estudiantes.append({
            'nombre': fila['nombre'],
            'edad': int(fila['edad'])
        })

# Exportar a CSV
with open('resultado.csv', 'w', encoding='utf-8', newline='') as archivo:
    campos = ['nombre', 'edad']
    escritor = csv.DictWriter(archivo, fieldnames=campos)
    escritor.writeheader()
    escritor.writerows(estudiantes_adultos)

# Exportar a JSON
import json
with open('resultado.json', 'w', encoding='utf-8') as archivo:
    json.dump(estudiantes_adultos, archivo, ensure_ascii=False, indent=2)
```

con pandas

```python
# Crear DataFrame desde múltiples fuentes
import pandas as pd

# Desde diccionario
datos = {'nombre': ['Ana', 'Luis'], 'edad': [25, 30]}
df = pd.DataFrame(datos)

# Desde CSV/Excel/JSON
df = pd.read_csv('archivo.csv')
df = pd.read_excel('datos.xlsx')
df = pd.read_json('data.json')

# Extraer datos específicos
nombres = df['nombre'].tolist()  # columna como lista
subset = df[['nombre', 'edad']]  # múltiples columnas
primeros_5 = df.head(5)  # primeras 5 filas

# Exportar resultados
df.to_csv('resultado.csv', index=False)
df.to_excel('resultado.xlsx', index=False)
df.to_json('resultado.json')
```
