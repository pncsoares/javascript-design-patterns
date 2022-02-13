# Null Object Design Pattern

Provides a default object.

## Advantages

- You don't need to validate if the always is null before using it every single time
- Avoid null references if you forget to validate it before using
- It speeds up the code, by eliminating unnecessary if checks

## Disadvantages

- Can waste memory if there are a lot of null objects
- The “do-nothing” behavior may not be well defined
- Sometimes a null object must be replaced by a real object
