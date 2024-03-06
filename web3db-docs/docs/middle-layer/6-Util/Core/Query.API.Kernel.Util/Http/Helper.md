# Helper.cs Documentation

## Overview

`Helper.cs` contains helper methods and extensions related to HTTP response handling and retry logic in the context of the Query API Kernel. It provides functionality to ensure successful HTTP responses, throw custom exceptions based on HTTP response status codes, and implement retry mechanisms for operations that may temporarily fail due to transient errors.

## Classes and Extensions

### HttpResponseMessageExtensions

#### Methods

- **EnsureSuccessStatusCodeAsync**: An extension method for `HttpResponseMessage` that asynchronously ensures the response status code indicates success. If the response is not successful, it reads the response content as a string and throws a `SimpleHttpResponseException` with the status code and response content.

### SimpleHttpResponseException

A custom exception class that extends `Exception`. It is designed to encapsulate HTTP response status codes and content in exception scenarios.

#### Attributes

- **StatusCode**: A `HttpStatusCode` value representing the HTTP status code associated with the exception.

#### Constructor

- **SimpleHttpResponseException(HttpStatusCode statusCode, string content)**: Initializes a new instance of the `SimpleHttpResponseException` class with the specified status code and response content.

### Retry

A static class providing methods to execute a given operation with retry logic. It is useful for handling transient errors in network calls or other operations that may fail temporarily.

#### Attributes

- **\_logger**: A `ILogger<Retry>` instance used for logging retry operations and exceptions.

#### Methods

- **OnExceptionAsync\<TRet\>**: Executes an asynchronous operation with retry logic. It retries the operation a specified number of times with a delay between each try. If all retries fail, it throws the last caught exception.

  Parameters:

  - `Func<Task<TRet>> callBackDelegate`: The asynchronous operation to execute with retry logic.
  - `int numberOfTries = 3`: The number of times to retry the operation.
  - `int delayBetweenTries = 500`: The delay in milliseconds between retries.
  - `string caller = ""`: An optional identifier for the caller of the method, used for logging.

- **OnException\<TRet\>**: Executes a synchronous operation with retry logic. Similar to `OnExceptionAsync`, but for synchronous operations.

## Usage Examples

### Ensuring HTTP Response Success

```csharp
var response = await httpClient.GetAsync("https://example.com/api/data");
await response.EnsureSuccessStatusCodeAsync();
```

### Retrying an Operation

```csharp
var result = await Retry.OnExceptionAsync(async () => await SomeOperationThatMayFail(), 3, 1000);
```

### Handling Custom HTTP Exceptions

In methods where HTTP requests are made, catch `SimpleHttpResponseException` to handle custom error responses.

```csharp
try
{
    var response = await httpClient.GetAsync("https://example.com/api/data");
    await response.EnsureSuccessStatusCodeAsync();
}
catch (SimpleHttpResponseException ex)
{
    // Handle the exception based on the StatusCode and message
}
```

## Conclusion

`Helper.cs` provides essential utilities for working with HTTP responses and implementing retry logic in the Query API Kernel project. It enhances error handling by allowing custom exceptions based on HTTP responses and offers a systematic approach to retry operations prone to transient failures.
