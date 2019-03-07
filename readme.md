# Django React Docker Boilerplate

Setup for creating an authentication-based web application


## Functionalities

### API

- Uses Django REST Framework
- Uses default database (SQLite)
- Simple Djoser authentication API (with JWT)

### Frontend

- Makes use of React and Redux
- Uses Antd (Ant Design) for UI library
- Simple login page and registration page created
- Authentication connected to backend API


## Prerequisites

- virtualenv
- python 3
- node
- yarn
- docker


## Setup (Without Docker)

### Backend (Django)

Prepare virtual enviromnent
```
virtualenv .env
source .env/bin/activate
```

Install requirements
```
pip install -r api/requirements.txt
```

Database migrations
```
cd api
python manage.py makemigrations
python manage.py migrate
```

Run server
```
python manage.py runserver
```

### Frontend (React)

Install packages
```
cd frontend
yarn install
```

Run server
```
yarn run start
```

## Setup (With Docker)

Ensure that docker service is running
```
sudo systemctl start docker
```

Building docker containers
```
sudo docker-compose build
```

Start servers
```
sudo docker-compose up
```

Stop servers
```
sudo docker-compose down
```
