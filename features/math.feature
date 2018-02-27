Feature: Maths utilities

  Scenario: Interpolation
    Given an interpolator from 0.0=0.0 to 1.0=1.0
    When I ask for value 0.3
    Then I should get 0.3

    When I ask for value 0.6
    Then I should get 0.6

    Given an interpolator from 0.0=1.0 to 1.0=0.0
    When I ask for value 0.6
    Then I should get 0.4

  Scenario: Time
    Given a locale of 'en'
    When I set the time to '00:00'
    Then the elapsed time is 0 seconds

    When I set the time to '06:01'
    Then the elapsed time is 21660 seconds

    When I format 21660 as a timecode
    Then the timecode is '6:01:00'
