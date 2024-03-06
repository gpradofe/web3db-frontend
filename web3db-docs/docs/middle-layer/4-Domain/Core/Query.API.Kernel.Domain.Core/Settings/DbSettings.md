# `DbSettings.cs` Documentation

## Overview

`DbSettings.cs` is part of the Query API Kernel Domain Core layer. This class is designed to encapsulate the settings required for database connectivity and configuration within the application. It acts as a data transfer object (DTO) that carries database connection information from configuration files or services into the application.

## Properties

The `DbSettings` class defines the following properties:

- **DbProvider**: A string representing the database provider (e.g., SQL Server, PostgreSQL).
- **UseSecret**: A boolean indicating whether to use a secret manager for sensitive information.
- **Server**: The server address where the database is hosted.
- **Port**: The port number through which the database server communicates.
- **Database**: The name of the database to connect to.
- **Schema**: The schema within the database to use.
- **Username**: The username for database authentication.
- **SecretName**: The name of the secret (if `UseSecret` is `true`) where credentials are stored.
- **Password**: The password for database authentication (used if `UseSecret` is `false`).

## Usage Example

To use the `DbSettings` class, you first need to instantiate it and populate it with the necessary database connection details. It can be populated manually or via dependency injection with settings loaded from `appsettings.json` or another configuration source.

### Example of manual population:

```csharp
var dbSettings = new DbSettings
{
    DbProvider = "SqlServer",
    UseSecret = false,
    Server = "localhost",
    Port = "1433",
    Database = "MyDatabase",
    Schema = "dbo",
    Username = "myUsername",
    Password = "myPassword"
};
```

### Example with configuration (assuming ASP.NET Core):

In `appsettings.json`:

```json
{
  "DbSettings": {
    "DbProvider": "SqlServer",
    "UseSecret": false,
    "Server": "localhost",
    "Port": "1433",
    "Database": "MyDatabase",
    "Schema": "dbo",
    "Username": "myUsername",
    "Password": "myPassword"
  }
}
```

In Startup configuration:

```csharp
public void ConfigureServices(IServiceCollection services)
{
    // Bind DbSettings from configuration
    var dbSettings = Configuration.GetSection("DbSettings").Get<DbSettings>();
    services.AddSingleton(dbSettings);
}
```

This makes the `DbSettings` object available throughout the application, ensuring that all components have access to consistent and centralized database configuration.

## Conclusion

`DbSettings.cs` plays a crucial role in managing database connectivity configurations in a structured and maintainable manner. By encapsulating these settings within a class, it simplifies the management of database connections and promotes best practices for configuration management in .NET applications.