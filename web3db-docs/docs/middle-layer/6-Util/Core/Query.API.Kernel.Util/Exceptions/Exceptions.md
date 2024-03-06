# Exceptions.cs Documentation

`Exceptions.cs` is part of the Query.API.Kernel.Util project, which encapsulates utility classes and methods used across the Query API Kernel application. This specific file defines custom exceptions that can be thrown during the execution of the application, providing more detailed error handling mechanisms.

## Custom Exceptions

### PropertyNotFoundException

This exception is thrown when a specific property expected to be present is not found. This could be used, for example, in scenarios where dynamic data parsing or mapping is performed, and a required property is missing from the source data.

#### Properties

- **PropertyName**: A string representing the name of the property that was not found. This helps in identifying which property caused the exception.

#### Constructor

The `PropertyNotFoundException` constructor takes two parameters:

1. `propertyName`: The name of the property that was not found.
2. `message`: The error message that explains the reason for the exception.

##### Example Usage:

```csharp
throw new PropertyNotFoundException("Username", "The 'Username' property was not found in the data source.");
```

#### Example:

Consider a scenario where you are mapping data from a JSON object to a C# class, and the JSON object is expected to have a property named "Username". If this property is missing, you could throw a `PropertyNotFoundException` to clearly indicate the cause of the error:

```csharp
if (!jsonObject.ContainsKey("Username"))
{
    throw new PropertyNotFoundException("Username", "The 'Username' property was not found in the JSON object.");
}
```

This approach of using custom exceptions like `PropertyNotFoundException` enhances the error handling capabilities of your application by providing more context about the errors, making debugging and logging more effective.