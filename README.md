# Automated Smartwatch Activity Replication

A Lab Ubiquitous Systems course project exploring how to reproduce and generate smartwatch activity data. The project has two complementary goals:

1. **Replay recorded movement:** use a 3D printer's actuators, controlled with G-code, to reproduce motion represented by saved smartwatch sensor time series.
2. **Generate simulated activity:** simulate human movements and let users add configurable noise to activity data produced for a connected smartwatch.

The aim is to make wearable activity experiments more repeatable and to explore how physical motion and synthetic sensor data can be used to test activity-tracking systems.

> **Project status:** This repository is in development. Hardware requirements, supported data formats, software dependencies, setup instructions, and implemented features will be documented here as they are established. The outline below describes the project goals, not a claim that every feature is already available.

## Project goals

### Recorded motion replay

- Load a saved sensor time series from a smartwatch.
- Translate the recorded motion into a sequence of actuator movements.
- Generate G-code suitable for a compatible 3D-printer-style motion system.
- Replay the sequence to create repeatable physical movement for an attached smartwatch to record.

### Activity simulation and noise

- Simulate human movement for a chosen activity.
- Allow users to configure noise added to the simulated activity data.
- Send or otherwise make generated data available to a connected smartwatch, depending on the supported device and project implementation.

## Conceptual workflow

1. **Provide activity data** — choose a recorded sensor time series or configure a simulated activity.
2. **Prepare the motion or signal** — convert the source into the representation required by the selected replay or simulation workflow.
3. **Configure the experiment** — set the relevant activity, noise, and hardware options supported by the implementation.
4. **Run and observe** — replay the generated G-code or use the simulated data with a connected smartwatch.
5. **Compare results** — inspect the source and collected activity data to evaluate repeatability and differences.

## Repository contents

This repository is being developed. As the implementation grows, this section will describe the code, sample data, hardware documentation, and experiment notes available here.

## Getting started

Setup and usage instructions will be added once the project's software stack, supported input format, and hardware configuration are finalized. Before running any actuator-generated G-code, review the safety guidance below and verify that the motion is suitable for your specific machine.

## Hardware safety

A 3D printer is a moving machine, and generated G-code can cause unexpected motion if it does not match the hardware configuration. Use this project only with a safely mounted test setup, keep clear of moving parts, and supervise every run. Start with low speeds and small movements, check travel limits and emergency-stop access, and inspect G-code before sending it to a printer. Do not attach a person or wearable to an actuator mechanism unless the setup has been specifically designed and assessed for safe use.

## Data and privacy

Smartwatch data can reveal sensitive information about a person's movement and routines. Use data you have permission to collect and process, remove identifying information where possible, and avoid publishing personal recordings without informed consent.

## Development roadmap

- Document the supported smartwatch data format and preprocessing steps.
- Specify the compatible actuator setup and motion limits.
- Implement and document conversion from sensor samples to G-code.
- Add activity simulation and user-configurable noise options.
- Provide reproducible examples and instructions for collecting and comparing results.

## Contributing

This is a course project. Contributions, suggestions, and issue reports are welcome. Please include enough information to reproduce a bug or understand a proposed change, and do not include private smartwatch recordings in public reports.

## License

No license has been specified yet. Until one is added, all rights remain with the project owners; please contact them before reusing or distributing this project's code or materials.
