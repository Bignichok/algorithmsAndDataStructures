##Hash tables

- Hash tables are used to store hey-value pairs
- they are like arrays, but the keys are not ordered
- unlike arrays, hash tables are fast for all of the following operations:
finding values, adding new values, and removing values 

###Own implementation of Hash table
-To implement a hash table we will be using an array
-In order to look up values by key, we need a way to convert keys into valid array indices.
-A function that performs this task is called a hash function

####Hash function
Is function that hash some value

####BIG O of Hash tables
-insert O(1)
-delete O(1)
-get O(1)