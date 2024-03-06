# ISendQueryAction Interface Documentation

The `ISendQueryAction` interface is part of the Query API Kernel's Application layer, specifically within the Query action interfaces. This interface defines the contract for an action that sends a query and awaits a result. It plays a crucial role in the abstraction of how queries are executed and results are fetched within the system.

## Interface Definition

```csharp
public interface ISendQueryAction
{
    Task<ReturnQueryResults> SendQueryAsync(SendQueryDTO query);
}
```

### Methods

#### SendQueryAsync

- **Purpose**: Asynchronously sends a query based on the provided `SendQueryDTO` object and awaits the results.
- **Parameters**:
  - `SendQueryDTO query`: An object that encapsulates the details of the query to be sent. This includes any parameters or configurations necessary for executing the query.
- **Returns**: A `Task<ReturnQueryResults>` which, upon completion, contains the results of executing the query.

### Parameter Types

#### `SendQueryDTO`

A Data Transfer Object (DTO) that encapsulates the details of the query that needs to be sent. This may include, but is not limited to, the actual query string, any parameters required by the query, and other settings that might influence the execution of the query.

#### `ReturnQueryResults`

An object that encapsulates the results of the query execution. It may contain details such as the number of records affected, any data retrieved as a result of the query execution, and potentially error information if the query did not execute successfully.

## Usage Example

```csharp
public class SomeClassThatUsesISendQueryAction
{
    private readonly ISendQueryAction _sendQueryAction;

    public SomeClassThatUsesISendQueryAction(ISendQueryAction sendQueryAction)
    {
        _sendQueryAction = sendQueryAction;
    }

    public async Task PerformQueryActionAsync()
    {
        SendQueryDTO queryDto = new SendQueryDTO
        {
            // Initialization of the query DTO with necessary details
        };

        try
        {
            ReturnQueryResults results = await _sendQueryAction.SendQueryAsync(queryDto);
            // Process results
        }
        catch (Exception ex)
        {
            // Handle any errors during query execution
        }
    }
}
```

In the example above, `SomeClassThatUsesISendQueryAction` demonstrates how a class might implement the `ISendQueryAction` to send a query and process the results asynchronously. It showcases the dependency injection of the `ISendQueryAction` interface and the execution of the `SendQueryAsync` method with error handling.