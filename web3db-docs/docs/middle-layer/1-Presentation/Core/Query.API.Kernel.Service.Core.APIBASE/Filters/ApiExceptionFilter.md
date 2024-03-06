# Documentation for `ApiExceptionFilter.cs`

`ApiExceptionFilter.cs` is part of the Query.API.Kernel's ASP.NET Core application, designed to handle exceptions globally across the API. This class extends the `ExceptionFilterAttribute` to customize the behavior of the application when an exception occurs during the request processing pipeline.

### Purpose:

The primary purpose of `ApiExceptionFilter` is to catch unhandled exceptions that occur during the execution of action methods in controllers. It then processes these exceptions to return a more readable and structured response to the client, which may include the type of exception, a custom message, and a status code.

### Key Features:

- **Centralized Exception Handling:** Offers a single location to manage unhandled exceptions, improving code maintainability and reducing redundancy.
- **Custom Response Structure:** Converts exceptions into a structured format that can be easily interpreted by the consuming clients.
- **Logging:** Integrates with `ILogger` for logging exception details, aiding in debugging and monitoring.

### Implementation Details:

- **Attributes and Constructors:** 
  - It defines a private `ILogger<ApiExceptionFilter>` attribute for logging purposes.
  - It includes two constructors, one parameterless and another accepting an `ILogger<ApiExceptionFilter>` instance for logging.

- **Overriding `OnException` Method:**
  - This method is overridden to customize the exception handling behavior.
  - It differentiates between `AggregateException` and other exceptions to tailor the response accordingly.
  - For `AggregateException`, it sets a 404 status code and custom messages indicating the property not found.
  - For other exceptions, it logs the details and constructs a generic internal server error response.
  - Finally, it sets the `HttpContext.Response.StatusCode` and `context.Result` to return a structured JSON response to the client.

### Example Usage:

While the `ApiExceptionFilter` is automatically applied to all controllers inheriting from `ApiControllerBase` through the `[ServiceFilter(typeof(ApiExceptionFilter))]` attribute, it can also be applied directly to any controller or action method as shown below:

```csharp
[ApiController]
[Route("api/[controller]")]
[ServiceFilter(typeof(ApiExceptionFilter))]
public class SampleController : ControllerBase
{
    // Action methods here
}
```

### Conclusion:

The `ApiExceptionFilter.cs` plays a crucial role in the Query.API.Kernel project by providing a robust mechanism for handling exceptions across the API. By centralizing exception handling, it ensures that all unhandled exceptions are processed uniformly, improving the API's reliability and ease of use for developers and clients alike.