package closet

import "stylo/src/clothes"

type Closet struct {
	ID      string
	Name    string
	Clothes []clothes.Clothes
}
