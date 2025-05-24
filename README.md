# API Gateway
# Project Overview
The API Gateway serves as the central entry point for all client requests in the Resume ATS Score Analyzer application. It acts as an intelligent proxy, efficiently routing incoming requests from the UI Service to the appropriate backend microservices, thereby decoupling the frontend from the complexities of the backend architecture.

# Key Responsibilities & Features
Centralized Request Handling: All API calls from the UI are directed through the API Gateway, providing a single, unified interface for the frontend.<br>
Request Routing: Dynamically forwards incoming requests (e.g., /auth/* to Auth Service, /ai/* to AI Service) to their respective backend microservices based on predefined paths.<br>
CORS Management: Handles Cross-Origin Resource Sharing (CORS) policies, allowing your Angular UI (running on localhost:4200) to securely communicate with your backend services (running on localhost:80 and internal Docker ports).<br>
Decoupling: Protects the internal microservices from direct exposure to the client, enhancing security and allowing independent development and deployment of backend services without affecting the frontend integration.<br>
Logging (Optional but included): Can be configured to centralize logging of incoming requests (as seen with access.log volume mount), providing a single point for monitoring API traffic.<br>

# Technologies Used
Backend Framework: Node.js (Express.js)<br>
Proxy Middleware: express-http-proxy<br>
CORS Management: cors middleware<br>

# Role in Architecture
The API Gateway is a crucial orchestration layer in your microservices setup. It simplifies client-side development by presenting a consistent API, manages network traffic, and enforces cross-cutting concerns like CORS, allowing the individual microservices to focus solely on their business logic.