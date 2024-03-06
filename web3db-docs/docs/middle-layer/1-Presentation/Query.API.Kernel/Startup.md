## `Startup.cs` Documentation 📄

The `Startup.cs` file serves as the backbone for configuring the services and the app's request pipeline in an ASP.NET Core application. This particular `Startup.cs` is tailored for a Query API, emphasizing versioning, Swagger documentation, and CORS policy, among other configurations.

## Overview

- **Namespace**: `Query.API.Kernel`
- **Dependencies**:
  - `Microsoft.AspNetCore.Mvc.ApiExplorer`
  - `Query.API.Kernel.Service.Core.APIBASE.StartupConfiguration`
  - `Query.API.Kernel.Service.Core.APIBASE.StartupConfiguration.Swagger`
  - `Query.API.Kernel.StartupConfiguration`

## Key Components

### Constructor

- **Purpose**: Initializes a new instance of the `Startup` class with a given configuration.
- **Parameters**:
  - `IConfiguration configuration`: Represents a set of key/value application configuration properties.

### Attributes

- **`public IConfiguration _configuration { get; }`**
  - Stores the application configuration properties passed to the constructor.

### Methods

#### ConfigureServices

- **Purpose**: Adds services to the application's container. This method gets called by the runtime.
- **Parameters**:
  - `IServiceCollection services`: Specifies the contract for a collection of service descriptors.
- **Configurations**:
  - Adds controllers.
  - Configures API versioning.
  - Adds versioned API explorer settings.
  - Registers application services and extensions.
  - Sets up JSON options.
  - Configures CORS policy.

#### Configure

- **Purpose**: Configures the HTTP request pipeline. This method gets called by the runtime.
- **Parameters**:
  - `IApplicationBuilder app`: Provides the mechanisms to configure an application’s request pipeline.
  - `IWebHostEnvironment env`: Provides information about the web hosting environment.
  - `IApiVersionDescriptionProvider provider`: Provides API version descriptions for API explorers.
- **Configurations**:
  - Error page for development environment.
  - Health checks endpoint.
  - CORS policy setup.
  - HTTPS redirection.
  - Request routing.
  - Swagger configuration.
  - Authorization middleware.
  - Endpoints mapping for controllers.

## Usage

### App Startup Configuration

In the `Program.cs` file (or equivalent entry point), ensure you specify the `Startup` class as the startup class to be used by the web host builder:

```csharp
public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
    WebHost.CreateDefaultBuilder(args)
        .UseStartup<Startup>();
```

### Adding New Configurations

To introduce additional configurations (e.g., database contexts, authentication), utilize the `ConfigureServices` method. Service registrations are added here.

### Modifying the Request Pipeline

To add or modify middleware components in the request pipeline, make changes to the `Configure` method. The order of middleware is significant.

---

📌 **Note**: This `Startup.cs` emphasizes a clean separation of concerns and modularity, particularly with extension methods for Swagger and other configurations, making the API more maintainable and scalable.
