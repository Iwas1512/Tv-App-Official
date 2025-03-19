# AniViews

A comprehensive anime, movies, and TV shows review application that allows users to leave reviews on their favorite content and discover what to watch next.

## 🌟 Features

- Browse an extensive collection of anime, movies, and TV shows
- Read reviews from other users
- Create and publish your own reviews
- Discover new content based on user ratings
- User authentication and profile management

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library for building the user interface
- **npm** - Package management

### Backend
- **Java Spring Boot** - Backend framework 
- **Maven** - Dependency management
- **RESTful API** - For client-server communication

### Database
- **MongoDB** - NoSQL database for storing user data, reviews, and media information

## 📁 Project Structure

```
Tv-App-Official/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   ├── hero/
│   │   │   ├── home/
│   │   │   ├── reviewform/
│   │   │   ├── reviews/
│   │   │   └── trailer/
│   │   └── Layout.js
│   ├── package.json
│   └── package-lock.json
│
└── backend/
    ├── movies/
    │   ├── src/
    │   │   └── main/
    │   │       └── java/
    │   │           └── com/
    │   │               └── aniliwas/
    │   │                   └── movies/
    │   │                       ├── Movie.java
    │   │                       ├── MovieController.java
    │   │                       ├── MovieRepository.java
    │   │                       ├── MovieService.java
    │   │                       ├── MoviesApplication.java
    │   │                       ├── Review.java
    │   │                       ├── ReviewController.java
    │   │                       ├── ReviewRepository.java
    │   │                       └── ReviewService.java
    │   ├── mvnw
    │   ├── mvnw.cmd
    │   └── pom.xml
```

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- Java JDK 11 or higher
- Maven
- MongoDB

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Iwas1512/Tv-App-Official.git
cd Tv-App-Official
```

2. **Backend Setup**

```bash
cd backend/movies
./mvnw spring-boot:run
```

3. **Frontend Setup**

```bash
cd frontend
npm install
npm start
```

The application should now be running on [http://localhost:3000](http://localhost:3000).

## 📱 Usage

1. **Register/Login**: Create an account or log in to access all features
2. **Browse Content**: Explore the catalog of anime, movies, and TV shows
3. **Read Reviews**: Check out what others have to say about particular titles
4. **Write Reviews**: Share your thoughts by submitting your own reviews
5. **Discover**: Use the ratings system to find new content that matches your interests

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



## 🙏 Acknowledgements

- [Spring Boot](https://spring.io/projects/spring-boot) for the backend framework
- [React](https://reactjs.org/) for the frontend library
- [MongoDB](https://www.mongodb.com/) for the database solution

