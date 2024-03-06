## Documentation for `launchSettings.json`

The `launchSettings.json` file is a configuration file used by Visual Studio and .NET Core for setting up the environment for a web application during development. It contains settings for various launch profiles that determine how the application is started, what environment variables are set, and whether the browser is launched automatically. This file is part of the ASP.NET Core project and is situated in the Properties folder by default.

The file provides a convenient way to configure different environments (like Development, Staging, Production) and define how the application is launched in these environments. It is important to note that `launchSettings.json` is used only in the development environment and does not affect the application when it is published or deployed.

## Structure of `launchSettings.json` for `Query.API.Kernel`

```json
{
  "profiles": {
    "IIS Express": {
      "commandName": "IISExpress",
      "launchBrowser": true,
      "environmentVariables": {
        "ASPNETCORE_ENVIROMENT": "dev"
      }
    },
    "Query.API.Kernel": {
      "commandName": "Project",
      "launchBrowser": true,
      "environmentVariables": {
        "ASPNETCORE_ENVIORONMENT": "dev"
      },
      "applicationUrl": "https://localhost:5009;http://localhost:5010"
    },
    "Docker": {
      "commandName": "Docker",
      "launchBrowser": true,
      "launchUrl": "{Scheme}://{ServiceHost}:{ServicePort}",
      "publishAllPorts": true,
      "useSSL": true
    }
  },
  "$schema": "http://json.schemastore.org/launchsettings.json",
  "iisSettings": {
    "windowsAuthentication": false,
    "anonymousAuthentication": true,
    "iisExpress": {
      "applicationUrl": "http://localhost:61494",
      "sslPort": 44593
    }
  }
}
```

## Profiles

- **IIS Express**: Configures the project to launch using IIS Express, with a predefined environment variable and automatic browser launching.
- **Query.API.Kernel**: A custom profile for launching the project directly (not through IIS Express), specifying development environment variables and application URLs for HTTPS and HTTP.
- **Docker**: Intended for launching the project within a Docker container, with configuration for SSL, browser launching, and URL format.

## Important Fields

- `commandName`: Specifies the launch command or server to use (e.g., `IISExpress`, `Project`, `Docker`).
- `launchBrowser`: Determines whether a browser is launched automatically when the application starts.
- `environmentVariables`: Sets environment variables specific to the profile.
- `applicationUrl`: (For non-Docker profiles) Sets the URLs the application listens on.
- `launchUrl`: (For Docker profile) Template URL where the application can be accessed.
- `publishAllPorts`: (For Docker profile) Indicates if all ports are published to the host.
- `useSSL`: (For Docker profile) Specifies if SSL is used.

## Usage and Configuration

To use or modify these settings:

1. Open the `launchSettings.json` file in your project.
2. Adjust the profiles to fit your development needs, such as changing environment variables or URLs.
3. Save the file. Visual Studio or the .NET CLI will use these settings the next time the application is launched in development.

Remember, changes to `launchSettings.json` should be made considering the development environment and the specific needs of the application. These settings do not apply to production environments.
