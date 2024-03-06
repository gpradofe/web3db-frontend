# DatabaseRow.cs Documentation

## Overview
`DatabaseRow.cs` is part of the domain layer within the Query API Kernel project. This class represents a single row in a database table. Each `DatabaseRow` consists of a collection of fields, where each field is a key-value pair representing the column name and its corresponding value.

## Details

### Namespace
```csharp
Query.API.Kernel.Domain.Tables
```

### Properties

- **Fields**: A dictionary representing the columns (keys) and their values (objects) for a single database row.
  - Type: `IDictionary<string, object>`

### Usage

An instance of `DatabaseRow` can be used to represent and access data for a single row in a database table. This model is beneficial when working with dynamic database operations where the schema is not fixed, allowing easy access and manipulation of row data without the need of a strongly-typed model.

A typical usage scenario involves retrieving data from a database, then iterating through the result set and creating a `DatabaseRow` instance for each row in the result. This approach provides a flexible way to work with database rows, making it easier to handle data in a generic manner.

### Example

```csharp
// Assuming 'data' is an IEnumerable obtained from a database query
List<DatabaseRow> rows = data.Select(rowData => 
    new DatabaseRow
    {
        Fields = rowData.ToDictionary(column => column.Key, column => column.Value)
    }).ToList();

// Accessing data from the first row
var firstRow = rows.FirstOrDefault();
if (firstRow != null)
{
    object value;
    if (firstRow.Fields.TryGetValue("ColumnName", out value))
    {
        Console.WriteLine($"Value of ColumnName: {value}");
    }
}
```

This example demonstrates how to transform data retrieved from a database into a list of `DatabaseRow` instances and access specific column values within a row. It shows the flexibility of using `DatabaseRow` for database operations, especially in scenarios where the database schema might vary or is not known at compile time.