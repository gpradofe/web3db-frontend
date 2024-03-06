## TableData.cs Documentation

`TableData.cs` is part of the Domain layer in the Query.API.Kernel project, which primarily deals with the representation of data within a table. This class is designed to encapsulate the data structure that represents the content of a table in a database. It serves as a container for rows within a table, along with metadata about the columns.

### Namespace

```csharp
namespace Query.API.Kernel.Domain.Tables;
```

### Class Definition

`TableData` is a public class that encapsulates two main properties: `Rows` and `Columns`.

### Properties

- **Rows**: A list of `DatabaseRow` objects, representing each row within the table. Each `DatabaseRow` contains a dictionary of field names and their corresponding values.

    ```csharp
    public List<DatabaseRow> Rows { get; set; }
    ```

- **Columns**: A dictionary with string keys and string values, where each entry maps a column name to its data type. This property provides metadata about the columns contained in the table.

    ```csharp
    public Dictionary<string, string> Columns { get; set; }
    ```

### Usage Example

Here's an example of how `TableData` might be used to represent a table's data and metadata:

```csharp
var tableData = new TableData
{
    Rows = new List<DatabaseRow>
    {
        new DatabaseRow
        {
            Fields = new Dictionary<string, object>
            {
                {"Column1", "Value1"},
                {"Column2", 123}
            }
        },
        new DatabaseRow
        {
            Fields = new Dictionary<string, object>
            {
                {"Column1", "Value2"},
                {"Column2", 456}
            }
        }
    },
    Columns = new Dictionary<string, string>
    {
        {"Column1", "VARCHAR"},
        {"Column2", "INT"}
    }
};
```

In this example, `TableData` is used to represent a table with two columns (`Column1` of type `VARCHAR` and `Column2` of type `INT`) and two rows with corresponding values.

### Conclusion

`TableData.cs` provides a structured way to represent table data and metadata within the Query.API.Kernel.Domain layer. It plays a crucial role in modeling database tables and their contents, facilitating data handling and manipulation within the application.