# **DOCKER CHEAT SHEET**

## **Basic Docker Commands**

| Command | What It Does |
| ----- | ----- |
| `docker -v` | Check Docker version |
| `docker info` | Show system-wide Docker info |
| `docker help` | List all Docker commands |

## ---

## **Working with Containers**

| Command | What It Does |
| ----- | ----- |
| `docker run hello-world` | Runs your first container |
| `docker run -it ubuntu` | Starts an interactive Ubuntu container |
| `docker ps` | Lists running containers |
| `docker ps -a` | Lists all containers (including stopped) |
| `docker stop <container_id>` | Stops a running container |
| `docker rm <container_id>` | Deletes a container |
| `docker logs <container_id>` | Shows container output |
| `docker exec -it <container_id> bash` | Enters a running container |

---

## 

## 

## **Working with Images**

| Command | What It Does |
| ----- | ----- |
| `docker images` | Lists downloaded images |
| `docker pull <image>` | Downloads image from Docker Hub |
| `docker rmi <image_id>` | Deletes an image |
| `docker build -t <name> .` | Builds image from Dockerfile |

---

##  **Dockerfile Basics**

dockerfile  
CopyEdit  
\# Sample Dockerfile  
FROM python:3.8  
COPY app.py .  
CMD \["python", "app.py"\]

---

## **Networking & Ports**

| Command | What It Does |
| ----- | ----- |
| `docker run -d -p 8080:80 nginx` | Runs nginx and maps container port 80 to host port 8080 |
| `localhost:8080` | Access web app in browser |

---

## **Docker Hub**

| Command | What It Does |
| ----- | ----- |
| `docker login` | Log in to Docker Hub |
| `docker push <username>/<image>` | Upload your image |
| `docker pull <username>/<image>` | Download image from Hub |

---

## **Clean Up**

| Command | What It Does |
| ----- | ----- |
| `docker rm $(docker ps -aq)` | Remove all containers |
| `docker rmi $(docker images -q)` | Remove all images |

