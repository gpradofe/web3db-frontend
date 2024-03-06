## QueryController Documentation

The `QueryController` is a vital component within the Query.API.Kernel application. It serves as the entry point for handling requests related to database queries. This controller leverages the MVC pattern facilitated by .NET Core to receive, process, and respond to HTTP requests.

## Key Components

- **Attributes:** It uses the `IQueryApplication` interface to interact with the application layer for executing queries.
- **Constructor:** Initializes the controller with necessary dependencies such as `ILogger<QueryController>` for logging and `IQueryApplication` for query operations.
- **Endpoints:** Defines an HTTP POST endpoint for sending queries to the database.

## Endpoint Details

### SendQuery

- **Type**: HTTP POST
- **Route**: `/SendQuery`
- **Input**: Expects a JSON payload in the body matching the `SendQueryDTO` structure.
- **Output**: Returns a `ReturnQueryResults` object if successful, or an HTTP NoContent response if no data is found.
- **Errors**: Logs and throws any exceptions encountered during the operation.

## Example Usage

### Sending a Query

To send a new query, a client would issue an HTTP POST request to the `/SendQuery` endpoint with a JSON payload representing the query to be executed.

**Request URL**: `http://<host>:<port>/SendQuery`

**Request Body (JSON):**

```json
{
  "queryText": "SELECT * FROM example_table",
  "databaseName": "example_db"
}
```

**Response (Success):**

- **Status Code**: 200 OK
- **Body**: JSON representation of `ReturnQueryResults`, containing the results of the query.

**Response (No Content):**

- **Status Code**: 204 No Content

**Response (Error):**

- **Status Code**: Various (depending on error)
- **Body**: Error details

## Implementation Overview

The controller method `PostNewQuery` starts by logging the intent to fetch all schemas. It then proceeds to call `_queryApplication.SendQueryAndGetResultsAsync(sendQueryDTO)` with the provided DTO from the request body. The result of this call (if not null) is returned as an HTTP OK response with the query results. In case the result is null, indicating no data was found, an HTTP NoContent response is returned. The method is wrapped in a try-catch block to handle and log any exceptions that occur.

## Conclusion

The `QueryController` serves as a crucial component for processing database query requests within the Query.API.Kernel application. By providing a straightforward and effective way to execute queries through HTTP requests, it enables clients to interact with databases in a secure and controlled manner.
