# ActionFilter.cs Documentation

`ActionFilter.cs` belongs to the infrastructure of an ASP.NET Core Web API project, specifically designed for handling custom behavior around controller actions. In the context of this particular project, the `ActionFilter` class implements the `IActionFilter` interface from ASP.NET Core MVC, allowing it to intercept incoming HTTP requests before they reach the controller actions and after the action has executed.

## Purpose and Functionality

The primary purpose of the `ActionFilter` class is to enhance or modify the behavior of action methods in controllers. It does this by implementing two methods:

- `OnActionExecuting`: This method is called before the execution of the action method. It provides an opportunity to perform tasks or log information before the controller action is executed. In this implementation, it is used to add a unique `EventId` (a `Guid`) to the `LogContext` of Serilog, ensuring that all logs generated during the processing of a single HTTP request can be correlated.

- `OnActionExecuted`: This method is called after the action method executes. It can be used to perform tasks like logging, error handling, or response modification after the action has executed. In this specific implementation, the method is empty, indicating that no post-execution processing is required at the moment, but it's in place for future extensibility.

## Code Snippet

```csharp
using Microsoft.AspNetCore.Mvc.Filters;
using Serilog.Context;
using System;

namespace Query.API.Kernel.Service.Core.APIBASE.StartupConfiguration.Filters
{
    public class ActionFilter : IActionFilter
    {
        public void OnActionExecuted(ActionExecutedContext context)
        {
            // Post-execution logic can be added here
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            // Adding a unique EventId to the logging context before the action executes
            LogContext.PushProperty("EventId", Guid.NewGuid());
        }
    }
}
```

## Usage

The `ActionFilter` class is typically applied globally or on specific controllers/actions by registering it in the application's middleware pipeline or using attributes. This ensures that the desired pre- and post-execution behavior is applied to HTTP requests handled by the application.

This class is particularly useful for scenarios where consistent pre- or post-processing is required across multiple controller actions, such as logging, validation, or setting up shared resources.

In summary, `ActionFilter.cs` provides a foundation for implementing custom behavior around action execution in the ASP.NET Core Web API project, with a current focus on enhancing logging capabilities with Serilog.