## ApiControllerBase.cs Documentation

The `ApiControllerBase.cs` file is an essential part of the Query.API.Kernel project, providing a foundational class from which all API controllers inherit. This abstract class is designed to encapsulate common functionalities and configurations that are shared across different controllers within the API. Below is a detailed overview of its components and functionalities.

## Overview

- **Namespace:** `Query.API.Kernel.Service.Core.APIBASE.StartupConfiguration.Base`
- **Inheritance:** Inherits from `ControllerBase`.
- **Attributes:**
  - `[ApiController]`: Specifies that the controller responds to web API requests.
  - `[Route("api/[controller]")]`: Defines the route template. The `[controller]` placeholder is replaced by the controller's name.
  - `[ServiceFilter(typeof(ApiExceptionFilter))]`: Indicates that the `ApiExceptionFilter` is used for handling exceptions that occur within actions of this controller.

## Components

### Attributes

- `protected ILogger<T> _logger;`
  - A protected member that holds the logger instance. It is used within the controller and derived classes for logging purposes.

### Constructor

- **ApiControllerBase(ILogger\<T\> logger)**
  - The constructor initializes the `ApiControllerBase` class with an `ILogger<T>` instance.
  - **Parameters:**
    - `ILogger<T> logger`: An instance of `ILogger<T>`, where `T` is the controller class that inherits from `ApiControllerBase`. This logger is used for logging information, warnings, errors, etc., within the controller.

## Usage

Controllers in the Query.API.Kernel project that handle API requests should inherit from `ApiControllerBase<T>` to leverage the common functionalities it provides, such as logging and exception handling through `ApiExceptionFilter`. This ensures a consistent approach to error handling and logging across all controllers.

### Example

```csharp
public class SampleController : ApiControllerBase<SampleController>
{
    public SampleController(ILogger<SampleController> logger) : base(logger)
    {
    }

    [HttpGet]
    public IActionResult Get()
    {
        _logger.LogInformation("Executing Get operation");
        return Ok("Data");
    }
}
```

In the example above, `SampleController` inherits from `ApiControllerBase<SampleController>`, gaining access to the `ILogger` instance for logging and automatically benefiting from the applied `ApiExceptionFilter` for error handling. This setup simplifies controller implementations by abstracting common concerns.

## Conclusion

The `ApiControllerBase.cs` file plays a crucial role in the Query.API.Kernel project by providing a base class with essential configurations and functionalities for API controllers. By inheriting from `ApiControllerBase<T>`, controllers can ensure consistent behavior regarding logging and exception handling across the API.
