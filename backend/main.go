package main

import (
	"log"
	"net/http"

	"stylo/src/users"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

const VERSION = "v1"

func main() {
	// Actual router
	router := mux.NewRouter()

	// User Routes
	// Testing
	// router.HandleFunc("/"+VERSION+"/users", users.ListUsers).Methods("GET")

	router.HandleFunc("/"+VERSION+"/register", users.CreateUser).Methods("POST")
	router.HandleFunc("/"+VERSION+"/login", users.CheckUser).Methods("POST")
	router.HandleFunc("/"+VERSION+"/verify", users.VerifyToken).Methods("POST")

	// Cors
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:5173"},
		AllowedMethods:   []string{"POST", "OPTIONS"},
		AllowedHeaders:   []string{"Authorization", "Content-Type"},
		AllowCredentials: true,
	})

	// Listen
	log.Println("Listening on port 8000")
	log.Fatal(http.ListenAndServe(":8000", c.Handler(router)))
}
