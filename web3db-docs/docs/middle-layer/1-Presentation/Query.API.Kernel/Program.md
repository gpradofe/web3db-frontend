## Program.cs Documentation

`Program.cs` serves as the entry point for an ASP.NET Core application. This file contains the `Main` method, which initializes and runs the application, and an auxiliary method to configure the host builder for the application.

### Overview

- **Namespace**: Implicitly uses the `Microsoft.AspNetCore.Hosting` namespace for hosting-related functionalities.
- **Dependencies**:
  - `Microsoft.AspNetCore.Hosting` for web hosting services.
  - `Query.API.Kernel` for accessing the `Startup` class, which is part of the application's configuration.

### Main Components

1. **Main Method**: Entry point of the application. It creates and runs a web host using configurations defined in the `CreateHostBuilder` method.

   ```csharp
   public static void Main(string[] args)
   {
       CreateHostBuilder(args).Build().Run();
   }
   ```

2. **CreateHostBuilder Method**: Configures the host builder for the application. It specifies that the application should use the `Startup` class from the `Query.API.Kernel` namespace for further configurations.

   ```csharp
   public static IHostBuilder CreateHostBuilder(string[] args) =>
       Host.CreateDefaultBuilder(args)
           .ConfigureWebHostDefaults(webBuilder =>
           {
               webBuilder.UseStartup<Startup>();
           });
   ```

### Functionality

- Initializes the application and web server.
- Uses the `Startup` class to configure services and the request processing pipeline.

### Usage Example

To run the application, execute the following command in the terminal at the project's root directory:

```bash
dotnet run
```

This command compiles and runs the application, invoking the `Main` method in `Program.cs`, which then builds and starts the web host according to the configurations provided in the `Startup` class.

### Conclusion

`Program.cs` is a critical file in ASP.NET Core applications, acting as the starting point that sets up the host and triggers the application's bootstrapping process. By using the `Startup` class, it allows for flexible configurations of services and middleware, making it an integral part of the application's architecture.
