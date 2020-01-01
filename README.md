# ubiquiti-chat-client
Client-side of a fullstack chat app, built for Ubiquiti.


## Technologies used

* `React` 
* `Redux` for state management
* `socket.io` for real-time bidirectional communication
* `Material-UI`, for a consistent style and UI

## Running

Simply run
>`yarn`

to install dependencies, and run a development version of the client with 

>`yarn start`

### Docker

#### Build

>`docker build -t client:1.0.0 .`

#### Start
>`docker run -p 3000:80 --name chat_client client:1.0.0`

#### Access
The server will be available on `http://localhost:3000/`.

---
