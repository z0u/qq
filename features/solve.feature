Feature: Solver
  A solver causes the model to evolve in a predictable way.

  Scenario: Stepping
    Given a simple simulator
    Then the number of clients in the system is 0

    When a timestep passes
    Then the number of clients in the system is 1
