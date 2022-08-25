## Endpoints

List of Available Endpoints:
- `GET /members`
- `GET /books`
- `POST /borrow`

### GET /members
#### Description
- Get a list of all member

#### Response
_200 - OK_

- Body
    ```json
    {
      "statusCode": 200,
      "data": [
        {
          "id": 1,
          "code": "M001",
          "name": "Angga",
          "penaltyStatus": "inactive",
          "createdAt": "2022-08-24T14:22:52.413Z",
          "updatedAt": "2022-08-24T14:22:52.413Z"
        },
        {
          "id": 2,
          "code": "M002",
          "name": "Ferry",
          "penaltyStatus": "inactive",
          "createdAt": "2022-08-24T14:22:52.413Z",
          "updatedAt": "2022-08-24T14:22:52.413Z"
        },
        {
          "id": 3,
          "code": "M003",
          "name": "Putri",
          "penaltyStatus": "inactive",
          "createdAt": "2022-08-24T14:22:52.413Z",
          "updatedAt": "2022-08-24T14:22:52.413Z"
        }
      ]
    }
    ```

_500 - Internal Server Error_
- Body
    ```json
    {
      "statusCode": 500,
      "message": "Internal Server Error"
    }
    ```

### GET /books
#### Description
- Get a list of all book

#### Response
_200 - OK_

- Body
    ```json
    {
      "statusCode": 200,
      "data": [
        {
          "id": 2,
          "code": "SHR-1",
          "title": "A Study in Scarlet",
          "author": "Arthur Conan Doyle",
          "stock": 1,
          "createdAt": "2022-08-24T14:19:34.227Z",
          "updatedAt": "2022-08-24T14:19:34.227Z"
        },
        {
          "id": 3,
          "code": "TW-11",
          "title": "Twilight",
          "author": "Stephenie Meyer",
          "stock": 1,
          "createdAt": "2022-08-24T14:19:34.227Z",
          "updatedAt": "2022-08-24T14:19:34.227Z"
        },
        {
          "id": 4,
          "code": "HOB-83",
          "title": "The Hobbit, or There and Back Again",
          "author": "J.R.R. Tolkien",
          "stock": 1,
          "createdAt": "2022-08-24T14:19:34.227Z",
          "updatedAt": "2022-08-24T14:19:34.227Z"
        },
        {
          "id": 5,
          "code": "NRN-7",
          "title": "The Lion, the Witch and the Wardrobe",
          "author": "C.S. Lewis",
          "stock": 1,
          "createdAt": "2022-08-24T14:19:34.227Z",
          "updatedAt": "2022-08-24T14:19:34.227Z"
        },
        {
          "id": 1,
          "code": "JK-45",
          "title": "Harry Potter",
          "author": "J.K Rowling",
          "stock": 1,
          "createdAt": "2022-08-24T14:19:34.227Z",
          "updatedAt": "2022-08-25T13:26:20.904Z"
        }
      ]
    }
    ```

_500 - Internal Server Error_
- Body
    ```json
    {
      "statusCode": 500,
      "message": "Internal Server Error"
    }
    ```

### POST /borrow
#### Description
- Create a transaction data for borrowed book

#### Request
- Headers
    ```json
    {
      "Content-Type": "application/x-www-form-urlencoded"
    }
- Body
    ```json
    {
      "name": String of member's name,
      "title": String of book's title,
    }
    ```

#### Response
_201 - Created_
- Body
    ```json
    {
      "statusCode": 201,
      "data": {
        "id": 8,
        "BookId": 1,
        "MemberId": 1,
        "updatedAt": "2022-08-25T15:53:31.088Z",
        "createdAt": "2022-08-25T15:53:31.088Z"
      }
    }
    ```

_404 - Member or Book Not Found_
- Body
    ```json
    {
      "statusCode": 404,
      "message": "Book Not Found"
    }
    ```

### Global Error
#### Response
_500 - Internal Server Error_
- Body
    ```json
    {
      "statusCode": 500,
      "error": {
        "message": "Internal Server Error"
      }
    }
    ```