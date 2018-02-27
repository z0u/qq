# KyuuQueue

This is a dynamic queueing simulator. The model is [DAG] of *servers* connected by *queues*, with a number of *sources* and *sinks*. The sources generate new agents; these progress through queues to servers, who pass them on to subsequent queues, and finally to sinks.

[DAG]: https://en.wikipedia.org/wiki/Directed_acyclic_graph

## Running

1. Install [yarn]
1. Install dependencies

  ```
  yarn install
  ```

1. Start the web server:

  ```
  yarn start
  ```


Then follow the instructions on the console to open the page in your browser - e.g. open http://localhost:8080

[yarn]: https://yarnpkg.com/lang/en/docs/install/


## Testing

Tests are defined in the `features` directory using [Cucumber.js]. Run them with:

```
yarn test
```

[Cucumber.js]: https://github.com/cucumber/cucumber-js
