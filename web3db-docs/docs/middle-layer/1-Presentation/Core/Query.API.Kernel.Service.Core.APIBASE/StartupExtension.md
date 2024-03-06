# Documentation for `StartupExtension.cs`

The `StartupExtension.cs` file is a part of the Query.API.Kernel project, particularly focusing on the configuration of startup services for the ASP.NET Core application. The file defines extension methods for `IServiceCollection` that are used to add various configurations and services such as logging, filters, Swagger UI, and health checks to the application during its startup.

## Overview

The `StartupExtension` class contains static methods that extend the `IServiceCollection` interface. These methods are designed to modularize and organize the addition of services and configurations, making the `Startup.cs` file cleaner and more manageable.

## Methods

### `AddExtensions`

- **Description**: A composite method that calls other extension methods to add various services and configurations to the application.
- **Parameters**: `IServiceCollection services, IConfiguration configuration`
- **Usage**:
  ```csharp
  services.AddExtensions(Configuration);
  ```

### `AddLogs`

- **Description**: Adds logging services to the application.
- **Parameters**: `IServiceCollection services, IConfiguration configuration`
- **Usage**:
  ```csharp
  services.AddLogs(Configuration);
  ```

### `AddFilters`

- **Description**: Adds MVC filters to the application, including an action filter and an API exception filter.
- **Parameters**: `IServiceCollection services`
- **Usage**:
  ```csharp
  services.AddFilters();
  ```

### `AddSwaggerUI`

- **Description**: Adds Swagger UI services to the application, enabling API documentation and testing UI.
- **Parameters**: `IServiceCollection services`
- **Usage**:
  ```csharp
  services.AddSwaggerUI();
  ```

### `AddHealthChecks`

- **Description**: Adds health check services to the application, allowing for health monitoring.
- **Parameters**: `IServiceCollection services`
- **Usage**:
  ```csharp
  services.AddHealthChecks();
  ```

## Example Usage in `Startup.cs`

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddExtensions(Configuration);
}
```

## Conclusion

The `StartupExtension.cs` file plays a crucial role in configuring and initializing various services and configurations essential for the ASP.NET Core application. By organizing these configurations into extension methods, the file enhances the modularity and readability of the startup process.