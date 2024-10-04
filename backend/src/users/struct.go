package users

type User struct {
	ID string `json:"id"`
	// Email    string `json:"email"`
	InviteCode string `json:"inviteCode"`

	Username string `json:"username"`
	// will be hashed later
	Password string `json:"password"`
}

