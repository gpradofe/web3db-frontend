# EnumParser.cs Documentation

## Overview
`EnumParser.cs` is a utility class that provides methods for working with enumerations in .NET. It offers functionalities to get the name of an enum value, parse a string to an enum, and parse a string to a nullable enum value. These methods facilitate the handling of enumerations by providing a straightforward way to interact with enum values as strings and vice versa.

## Methods

### GetName
This method returns the name of an enum value.

#### Signature
```csharp
public static string GetName<T>(T value) where T : System.Enum
```

#### Parameters
- `T value`: The enum value for which to get the name.

#### Returns
- `string`: The name of the enum value. Returns `null` if the value is `null`.

#### Example
```csharp
enum Color { Red, Green, Blue }
string colorName = EnumParser.GetName(Color.Green); // Returns "Green"
```

### Parse
This method parses a string to an enum of type `T`.

#### Signature
```csharp
public static T Parse<T>(string value) where T : struct, System.Enum
```

#### Parameters
- `string value`: The string representation of the enum value to parse.

#### Returns
- `T`: The parsed enum value of type `T`.

#### Example
```csharp
enum Color { Red, Green, Blue }
Color color = EnumParser.Parse<Color>("Red"); // Returns Color.Red
```

### ParseNullable
This method parses a string to a nullable enum of type `T`. It is particularly useful when dealing with optional enum values.

#### Signature
```csharp
public static T? ParseNullable<T>(string value) where T : struct, System.Enum
```

#### Parameters
- `string value`: The string representation of the enum value to parse.

#### Returns
- `T?`: The parsed nullable enum value of type `T`. Returns `null` if the input string is `null` or empty.

#### Example
```csharp
enum Color { Red, Green, Blue }
Color? color = EnumParser.ParseNullable<Color>(""); // Returns null
```

## Usage
The `EnumParser` class is a handy tool for scenarios where enum values need to be dynamically parsed from strings, such as configuration settings or user input. It abstracts the complexity of the parsing logic, making the code more readable and maintainable.