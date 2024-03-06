# Documentation: HttpClientExtensions.cs

`HttpClientExtensions.cs` is a utility class that extends the functionality of the standard `HttpClient` class provided by .NET. This class introduces convenience methods for performing PATCH requests, which are not natively supported by `HttpClient` in all versions of .NET. The extensions provided make it more straightforward to execute PATCH requests by hiding the complexity of creating `HttpRequestMessage` objects and setting up the request manually.

## Methods

### PatchAsync

There are four overloads of the `PatchAsync` method, providing flexibility in how the request URI and content are specified, and whether a `CancellationToken` is used.

#### Overload 1

```csharp
public static Task<HttpResponseMessage> PatchAsync(this HttpClient client, string requestUri, HttpContent content)
```

- **Parameters**:
  - `client`: The `HttpClient` instance.
  - `requestUri`: The URI of the HTTP request as a `string`.
  - `content`: The `HttpContent` of the request.
- **Returns**: A task that represents the asynchronous PATCH operation. The task result contains the HTTP response message.

#### Overload 2

```csharp
public static Task<HttpResponseMessage> PatchAsync(this HttpClient client, Uri requestUri, HttpContent content)
```

- **Parameters**:
  - `client`: The `HttpClient` instance.
  - `requestUri`: The URI of the HTTP request as a `Uri` object.
  - `content`: The `HttpContent` of the request.
- **Returns**: Same as Overload 1.

#### Overload 3

```csharp
public static Task<HttpResponseMessage> PatchAsync(this HttpClient client, string requestUri, HttpContent content, CancellationToken cancellationToken)
```

- **Parameters**:
  - `client`: The `HttpClient` instance.
  - `requestUri`: The URI of the HTTP request as a `string`.
  - `content`: The `HttpContent` of the request.
  - `cancellationToken`: A `CancellationToken` to observe while waiting for the task to complete.
- **Returns**: Same as Overload 1, but with cancellation support.

#### Overload 4

```csharp
public static Task<HttpResponseMessage> PatchAsync(this HttpClient client, Uri requestUri, HttpContent content, CancellationToken cancellationToken)
```

- **Parameters**: Same as Overload 3 but `requestUri` is a `Uri` object.
- **Returns**: Same as Overload 1, but with cancellation support.

### CreateUri

```csharp
public static Uri CreateUri(string uri)
```

- **Parameters**:
  - `uri`: The URI as a `string`.
- **Returns**: A `Uri` object created from the provided string. Returns `null` if the string is empty or null.

## Usage Example

```csharp
var client = new HttpClient();
var content = new StringContent("{\"name\":\"value\"}", Encoding.UTF8, "application/json");
var cancellationToken = new CancellationToken();

// Using string requestUri and HttpContent, without CancellationToken
var response = await client.PatchAsync("http://example.com/api/resource", content);

// Using Uri requestUri, HttpContent, and CancellationToken
var uri = new Uri("http://example.com/api/resource");
var responseWithCancellation = await client.PatchAsync(uri, content, cancellationToken);
```

This extension class simplifies making PATCH requests with `HttpClient` by providing overloads that automatically create and send the appropriate `HttpRequestMessage`.
