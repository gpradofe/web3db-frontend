## ApplicationIoC.cs Documentation

The `ApplicationIoC.cs` file is a crucial part of the Query.API.Kernel's startup configuration, primarily focused on setting up the inversion of control (IoC) container. This file is responsible for managing the dependencies within the application, making sure that every component gets the correct instances it needs to operate. It essentially wires up the application, ensuring that all necessary services and their implementations are registered with the ASP.NET Core's built-in dependency injection (DI) system.

### Overview

Here's what the `ApplicationIoC.cs` does in detail:

1. **AddQueryApplication Method**: This is an extension method for `IServiceCollection`, which means it's designed to enhance the functionality of the underlying service collection used by ASP.NET Core for DI. This method bundles various services and their implementations related to the Query application into the service collection.

2. **Service Registration**:
    - **Singleton Services**: Services are added as singletons, meaning a single instance of each will be created and reused throughout the application's lifetime. This is suitable for services that are stateless or have a shared state that doesn't change.
   
    - **HTTP Client**: The method sets up a named HTTP client for `ISendQueryAction`, configuring it with a base address taken from the application's configuration (typically, `appsettings.json`). This client is intended to be used by `SendQueryAction` to make HTTP requests. The "allow-cache" default request header is also added to the client.

### Code Snippet

```csharp
public static class ApplicationIoC
{
    public static void AddQueryApplication(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddSingleton<ISendQueryAction, SendQueryAction>();

        #region Http
        services.AddHttpClient<ISendQueryAction, SendQueryAction>(client =>
        {
            client.BaseAddress = new Uri(configuration["Query:Url"]);
            client.DefaultRequestHeaders.Add("allow-cache", "true");
        });
        #endregion

        #region Application
        services.AddSingleton<IQueryApplication, QueryApplication>();
        #endregion
    }
}
```

### Key Components Registered

- **ISendQueryAction & SendQueryAction**: Represents the action that sends queries. This is setup with an HTTP client that's pre-configured to communicate with a specific base URL and headers.
  
- **IQueryApplication & QueryApplication**: The main application service that likely coordinates various aspects of the query functionality within the application.

### Usage

The `AddQueryApplication` method is meant to be called within the `Startup.cs` file's `ConfigureServices` method. This centralizes the DI setup for the application, making it easier to manage and understand.

### Conclusion

The `ApplicationIoC.cs` file plays a critical role in the Query.API.Kernel project by setting up dependency injection for the application. By centralizing the registration of services, it helps maintain a clean and manageable codebase, ensuring that services are correctly instantiated and available where needed throughout the application.