# Rag-a-thon-LLM

## Frontend

### Features

#### Landing Page

* API Key Input: Users can securely enter their OpenAI API key required for the chatbot to function.
* GitHub Credentials Input: Allows users to specify their GitHub username and repository name, intended for future integrations.
* Navigation: After providing the necessary information, users can proceed to the chatbot interface, with a smooth transition facilitated by a loading state.

#### Chatbot Interface
* Interactive Chat: Users can interact in real-time with an AI, sending messages through a user-friendly interface.
* Dynamic Messaging: The application dynamically displays messages from both the user and the AI, ensuring a seamless conversation flow.
* Error Handling: In case of API communication errors, the application gracefully handles these instances, ensuring the user is informed without breaking the interaction flow.

#### Technologies Used
* React: For building the user interface.
* Axios: Used for making HTTP requests to external APIs.
* React Router Dom: Manages navigation between the landing page and the chatbot interface.

#### Usage
Navigate to the landing page and enter your OpenAI API key along with your GitHub username and repository name. Click on "Proceed" to move to the chatbot interface. In the chatbot interface, type your message in the input field and press "Send" to communicate with the AI.

## Generative AI

### Features
* Document Processing: Processes documents to extract and vectorize content, preparing it for efficient indexing and retrieval.
* Vector Search with Astra DB: Leverages llama-index and Astra DB, a scalable, serverless NoSQL database, for storing and querying document vectors, ensuring fast and relevant search results.
* AI-Enhanced Query Handling: Uses OpenAI's GPT models for understanding user queries and generating precise responses, based on the context retrieved from documents.
* Scalable and Robust Storage: Employs Astra DB for the backend storage, offering robust, scalable storage solutions that can handle large volumes of data without compromising on performance.

Technologies Used
* Astra DB: A powerful, serverless NoSQL database provided by DataStax, designed for modern applications that require a scalable and flexible storage solution. It plays a crucial role in storing vectors generated from document contents efficiently.
* cassio: Facilitates easy interaction with Cassandra databases, including Astra DB, simplifying operations like connection and query execution.
* llama-index: A versatile library for creating RAGs on the fly.
* OpenAI's GPT Models: For natural language processing, understanding user queries, and generating relevant responses, enhancing the document retrieval process.

