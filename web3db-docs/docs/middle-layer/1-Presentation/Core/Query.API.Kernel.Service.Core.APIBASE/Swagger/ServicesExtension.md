# ServicesExtensions.cs Documentation

`ServicesExtensions.cs` is a part of the project's startup configuration, particularly focusing on configuring Swagger for API documentation. This class extends the capabilities of `IServiceCollection` through extension methods, enabling the setup and customization of Swagger generation options.

## Overview

Swagger is a set of open-source tools built around the OpenAPI Specification that can help you design, build, document, and consume REST APIs. The primary purpose of Swagger in an ASP.NET Core application is to generate helpful API documentation and UI for testing endpoints, making it easier for developers and consumers to understand and use the API.

## Extension Method: AddSwaggers

This extension method is used to configure Swagger documentation generation options.

### Method Signature

```csharp
public static IServiceCollection AddSwaggers(this IServiceCollection service)
```

### Parameters

- `IServiceCollection service`: The services collection from the ASP.NET Core dependency injection container. It allows for configuring and accessing application services.

### Implementation Details

1. **ConfigureSwaggerOptions Injection**:
    - The method begins by adding a transient service for `IConfigureOptions<SwaggerGenOptions>`, specifically using the `ConfigureSwaggerOptions` implementation. This step ensures that when Swagger generation options are being configured, our custom settings provided in `ConfigureSwaggerOptions` are applied.
    ```csharp
    service.AddTransient<IConfigureOptions<SwaggerGenOptions>, ConfigureSwaggerOptions>();
    ```

2. **SwaggerGen Configuration**:
    - Next, it calls the `AddSwaggerGen` method on the service collection to add and configure services required for Swagger generation.
    - Inside this method, it enables annotations and sets a custom schema ID strategy. This customization can be useful for handling scenarios where multiple classes might have the same name but reside in different namespaces.
    ```csharp
    service.AddSwaggerGen(opt =>
    {
        opt.EnableAnnotations();
        opt.CustomSchemaIds(type => type.FullName);
    });
    ```

### Returns

- `IServiceCollection`: The method returns the modified service collection, allowing for further chaining of service configuration calls.

## Usage Example

Typically, `ServicesExtensions.AddSwaggers` is called within the `Startup.ConfigureServices` method of an ASP.NET Core application to configure Swagger during application startup.

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddControllers();
    services.AddSwaggers(); // Add Swagger configuration
}
```

This setup ensures that the application generates Swagger documentation according to the configurations specified in `ConfigureSwaggerOptions` and with the enhancements provided in the extension method, such as enabling annotations and custom schema IDs.