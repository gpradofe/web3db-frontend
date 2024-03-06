# AppExtensions.cs Documentation

`AppExtensions.cs` is a C# code file within an ASP.NET Core project that focuses on extending the `IApplicationBuilder` interface functionality related to Swagger. This file is part of the project's configuration, particularly for API documentation and versioning. It provides a fluent API to configure Swagger UI in an ASP.NET Core application.

## Overview

- **Purpose**: To configure Swagger UI for documenting and exploring the API.
- **Namespace**: `Query.API.Kernel.Service.Core.APIBASE.StartupConfiguration.Swagger`
- **Dependencies**: Relies on `Microsoft.AspNetCore.Builder` and `Microsoft.AspNetCore.Mvc.ApiExplorer` namespaces for integrating Swagger UI in the application.

## Methods

### `AddSwaggers()`

- **Signature**: `public static IApplicationBuilder AddSwaggers(this IApplicationBuilder app, IApiVersionDescriptionProvider provider)`
- **Parameters**:
  - `app`: Represents the application's web host builder, allowing further configuration.
  - `provider`: An instance of `IApiVersionDescriptionProvider` used to access API version descriptions.
- **Returns**: `IApplicationBuilder` - The application builder for chaining further configuration.
- **Description**: This method configures and enables Swagger UI in the application. It uses the provided API version descriptions to setup multiple Swagger endpoints, one for each API version, and configures the Swagger UI to be more user-friendly by setting the documentation expansion mode and adjusting the route prefix.

## Usage Example

Here's an example of how to use `AddSwaggers` method within your application's `Startup.cs` file to configure Swagger UI:

```csharp
public void Configure(IApplicationBuilder app, IWebHostEnvironment env, IApiVersionDescriptionProvider provider)
{
    // Other configurations...

    app.AddSwaggers(provider);

    // Further configurations...
}
```

This example assumes that API versioning and Swagger are already configured in the `ConfigureServices` method of the `Startup.cs` file. The `AddSwaggers` method enhances the app's configuration by setting up Swagger UI with versioned endpoints, making it easier for developers and users to interact with the API documentation.

## Summary

`AppExtensions.cs` plays a vital role in enhancing the application's Swagger UI configuration. By providing a method to configure Swagger UI based on the application's API versioning, it improves the API documentation's usability and accessibility. This configuration is crucial for maintaining well-documented and easy-to-use APIs.