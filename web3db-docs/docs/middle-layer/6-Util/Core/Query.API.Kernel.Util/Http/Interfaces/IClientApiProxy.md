# Documentation: IClientApiProxy Interface

The `IClientApiProxy` interface is a part of the Query.API.Kernel.Util.Http.Interfaces namespace, which provides a contract for implementing a client API proxy. This proxy is responsible for handling HTTP requests such as GET, POST, PATCH, and DELETE asynchronously. The interface defines methods that must be implemented to facilitate communication with a web service or API endpoint.

## Namespace

```csharp
Query.API.Kernel.Util.Http.Interfaces
```

## Interface Definition

```csharp
public interface IClientApiProxy
{
    Task<TOutput> GetAsync<TOutput>(string action, params object[] args);
    Task<TOutput> PostAsJsonAsync<TOutput, TInput>(TInput input, string action, params object[] args);
    Task<TOutput> PatchAsJsonAsync<TOutput, TInput>(TInput input, string action, params object[] args);
    Task<TOutput> DeleteAsync<TOutput>(string action, params object[] args);
}
```

## Methods

### GetAsync

Performs an asynchronous GET request.

- **Parameters:**
  - `action`: The action URL to which the request will be sent.
  - `args`: Additional arguments that may be required to construct the full URL.
- **Type Parameters:**
  - `TOutput`: The expected return type.
- **Returns:** A task that represents the asynchronous operation, containing the deserialized response.

### PostAsJsonAsync

Performs an asynchronous POST request, sending data as JSON.

- **Parameters:**
  - `input`: The data to be sent with the request.
  - `action`: The action URL to which the request will be sent.
  - `args`: Additional arguments that may be required to construct the full URL.
- **Type Parameters:**
  - `TInput`: The type of the input data.
  - `TOutput`: The expected return type.
- **Returns:** A task that represents the asynchronous operation, containing the deserialized response.

### PatchAsJsonAsync

Performs an asynchronous PATCH request, sending data as JSON.

- **Parameters:**
  - `input`: The data to be sent with the request.
  - `action`: The action URL to which the request will be sent.
  - `args`: Additional arguments that may be required to construct the full URL.
- **Type Parameters:**
  - `TInput`: The type of the input data.
  - `TOutput`: The expected return type.
- **Returns:** A task that represents the asynchronous operation, containing the deserialized response.

### DeleteAsync

Performs an asynchronous DELETE request.

- **Parameters:**
  - `action`: The action URL to which the request will be sent.
  - `args`: Additional arguments that may be required to construct the full URL.
- **Type Parameters:**
  - `TOutput`: The expected return type.
- **Returns:** A task that represents the asynchronous operation, containing the deserialized response.

## Usage Example

```csharp
// Assuming implementation of IClientApiProxy as ClientApiProxy
IClientApiProxy apiProxy = new ClientApiProxy(logger, httpClient);

// Example of calling a GET request
var result = await apiProxy.GetAsync<MyResponseType>("api/values");

// Example of calling a POST request
var input = new MyRequestType();
var postResult = await apiProxy.PostAsJsonAsync<MyResponseType, MyRequestType>(input, "api/values");
```

This interface is crucial for creating a layer of abstraction over HTTP requests, making it easier to mock and test components that depend on external web services or APIs.
