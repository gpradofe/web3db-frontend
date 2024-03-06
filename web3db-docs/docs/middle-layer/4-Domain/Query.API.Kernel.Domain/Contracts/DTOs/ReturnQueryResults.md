# `ReturnQueryResults.cs` Documentation

## Overview
The `ReturnQueryResults.cs` file is part of a larger project aimed at handling queries and their results within an application's domain layer. This particular file defines a class `ReturnQueryResults` that serves as a data transfer object (DTO) for encapsulating the results of a query operation.

## Purpose
The primary purpose of the `ReturnQueryResults` class is to provide a standardized way of returning query results along with additional information such as a message, a hash, or an error message if applicable. This structure is especially useful for API responses where a consistent format for success or failure messages is beneficial.

## Class Definition

```csharp
public class ReturnQueryResults {
    public string? Message { get; set; }
    public List<Dictionary<string, object>>? Data { get; set; }
    public string? Hash { get; set; }
    public string? Error { get; set; }
}
```

### Properties

- **Message**: An optional property that can store a message related to the query results. This could be used to convey success messages or additional information about the data returned.
  
- **Data**: This is an optional property that holds the actual data returned by the query. It is a list of dictionaries, with each dictionary representing a row of data. The keys in the dictionary represent column names, and the values represent the data in each cell.
  
- **Hash**: An optional property meant to store a hash value. This could be useful for verifying the integrity of the data or for caching purposes.
  
- **Error**: An optional property that can store an error message. This is particularly useful when the query fails, and you want to provide information about the failure.

## Usage Example

The `ReturnQueryResults` class can be used in various parts of an application, especially within service layers that interact with the database. Below is a hypothetical example demonstrating its usage in an API controller method:

```csharp
[HttpPost("ExecuteQuery")]
public async Task<IActionResult> ExecuteQueryAsync([FromBody] QueryRequestDto queryRequest)
{
    try
    {
        // Assume ExecuteQueryAsync is a method that performs a query operation
        var queryResults = await _queryService.ExecuteQueryAsync(queryRequest);
        
        if (queryResults.Data != null && queryResults.Data.Any())
        {
            return Ok(queryResults);
        }
        else
        {
            return NotFound(new ReturnQueryResults { Message = "No data found." });
        }
    }
    catch (Exception ex)
    {
        return BadRequest(new ReturnQueryResults { Error = $"An error occurred: {ex.Message}" });
    }
}
```

In the example above, `ReturnQueryResults` is used to encapsulate the results of a query operation neatly. It provides a clear structure for both successful data retrieval and error handling, making the API response predictable and easy to handle on the client side.

## Conclusion
The `ReturnQueryResults` class is a crucial component for managing query results within the application, providing a consistent and flexible way to return data and related information. Its use can improve the maintainability and scalability of the application's code, especially in areas related to data access and API response handling.