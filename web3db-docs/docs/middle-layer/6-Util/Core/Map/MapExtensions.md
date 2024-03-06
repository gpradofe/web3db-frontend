# Documentation for `MapExtensions.cs`

The `MapExtensions.cs` file defines a static class named `MapExtensions` within the namespace `Query.API.Kernel.Util.Map`. This class provides extension methods to facilitate the mapping and transferring of properties from one object to another. These utility methods can be highly useful in scenarios where you need to copy properties from a source object to a destination object, especially when they share the same property names but may not be of the same type. This class aims to reduce boilerplate code for object-to-object mapping and encourages cleaner code practices by abstracting the reflection-based property transfer logic.

## Namespace

```csharp
namespace Query.API.Kernel.Util.Map
```

## Static Class

```csharp
public static class MapExtensions
```

## Methods

### 1. MatchAndMap\<TSource, TDestination\>

This is an extension method designed to match properties by name between a source and destination object, and map the values of matching properties from the source to the destination.

#### Parameters

- `TSource source`: The source object from which properties will be read.
- `TDestination destination`: The destination object to which properties will be written.

#### Constraints

- `TSource` : Must be a class with a parameterless constructor.
- `TDestination` : Must be a class with a parameterless constructor.

#### Code Example

```csharp
var sourceObject = new SourceType { Property1 = "value1", Property2 = "value2" };
var destinationObject = new DestinationType();
sourceObject.MatchAndMap(destinationObject);
```

### 2. MapProperties\<TDestination\>

This extension method creates a new instance of the `TDestination` type and maps properties from the source object to it.

#### Parameters

- `object source`: The source object from which properties will be read.

#### Constraints

- `TDestination` : Must be a class with a parameterless constructor.

#### Returns

- `TDestination`: A new instance of `TDestination` with properties mapped from the source.

#### Code Example

```csharp
var sourceObject = new { Property1 = "value1", Property2 = "value2" };
var destinationObject = sourceObject.MapProperties<DestinationType>();
```

## Summary

The `MapExtensions` class provides a clean and efficient way to copy properties between objects using reflection. This utility can significantly reduce the amount of manual mapping code, especially in applications involving complex data transformations or DTO mappings. By leveraging these extensions, developers can ensure that their codebase remains DRY (Don't Repeat Yourself) and maintainable.
