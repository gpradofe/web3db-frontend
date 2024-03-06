# SendQueryDTO Documentation

The `SendQueryDTO` class is a Data Transfer Object (DTO) used within the Query API, specifically designed for encapsulating the data involved in sending a query request. This class is a part of the Domain.Contracts.DTOs namespace, indicating its role in transferring data between different layers or systems in the application.

## Overview

The `SendQueryDTO` class contains properties essential for executing a query and optionally verifying the integrity or uniqueness of the request through a hash value. This DTO is primarily utilized when a client or consumer of the API wishes to send a query for execution.

## Properties

`SendQueryDTO` includes the following properties:

- `query`: A `string` that represents the actual query to be executed. This could be a SQL query, a search term, or any other form of query depending on the application's context.
- `hash`: An optional `string` that serves as a hash value or an identifier for the query. This can be used for caching, validating the uniqueness of the request, or ensuring the integrity of the query.

## Usage Example

```csharp
// Creating an instance of SendQueryDTO with a query and an optional hash
var sendQueryDto = new SendQueryDTO
{
    query = "SELECT * FROM Users WHERE UserId = 1",
    hash = "abc123"
};

// The sendQueryDto instance can then be passed to methods or services expecting a SendQueryDTO
```

In a typical scenario, this DTO would be serialized to JSON and sent over HTTP as part of a request payload to the Query API. The API would then deserialize the JSON back into an instance of `SendQueryDTO`, extract the `query` and `hash` values, and proceed with the query execution.

## Purpose

The primary purpose of the `SendQueryDTO` is to facilitate the transfer of query data in a structured and secure manner. By encapsulating the query and its associated hash within a single object, the API ensures that all necessary details for the query execution are received in a single request, potentially reducing the chances of errors or missed parameters.

Moreover, the use of a hash value (when applicable) enhances the security and reliability of the query process by allowing the API to verify the request's integrity or uniqueness before execution.