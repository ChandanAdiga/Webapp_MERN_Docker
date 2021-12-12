# WEB APP : MEARN stack with dockreization

## https://www.section.io/engineering-education/deploy-docker-container-to-kubernetes-cluster/


# Using Docker Compose
    Make sure docker & docker-compose are set up correctly and is available on terminal.
    Navigate to project root directory and run:
    $docker-compose up --build

    If all goes, well, there shouldn't be any error.. and should see logs coming from services like : app_backend, app_frontend & app_proxy.
    Open browser and hit URL http://localhost:8080 and you should see some list of items from inventory(Hardcoded items, for now)

    To clean the docker container cache run:
    $docker-compose rm -f


-------------------------------------------------------------------------------------

## Frontend: ReactJS app
    $npx create-react-app frontend
    $cd frontend
    $npm install
    $npm start

## Backend: NodeJS app
    $cd backend
    $npm install express cors mysql2
    $npm start


## Database: MySQL (To be done)