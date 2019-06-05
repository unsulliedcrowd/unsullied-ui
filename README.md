# Unsullied UI

## Structure
- [ ] Configuration - Configure the system
  - [ ] Domain info (Schema)
- [ ] Dashboard - Track the current state of the knowledge base and the crowd work being executed
  - [ ] KB state
  - [ ] Crowd results

### Configuration
- [ ] Context
  - [ ] Schema
  - [ ] Enabled/disabled types/properties
- [ ] Crowd
  - [ ] Desired personas
  - [ ] Task generation options
  - [ ] Task allocation options
  - [ ] Task aggregation options
  - [ ] Quality control options
- [ ] Result exposure (store in database, produce CSV, call webhook)

### Dashboard
- [ ] Basic info
  - [ ] Current time
  - [ ] Current configuration (summary (?))
- [ ] Current KB state
- [ ] Crowd work state
  - [ ] Workers stats (total, currently active, per persona, etc.)
  - [ ] Task stats (total, currently active, completed vs non-completed, etc.)
  - [ ] Result stats (flow graph, best/worst result, etc.)

## Examples
- [ ] Trash cans around campus
- [ ] Unsullied KB (meta knowledgebase (?))

## Docs
- [Basic React Project Info](README-React.md)
- [Material UI](https://material-ui.com/getting-started/usage/)
- [Routing](https://reacttraining.com/react-router/web/guides/basic-components)

<!--

- Make script for personas
- Thrash can properties: Name, location, isFull, thrash can type, size, thrash type
- Abstract properties: Geo-spatial data, Temporal data, Metadata, Labels
- Tasks: Find-Fix-Verify

Thrashcan isFull:
Find: Find (full) thrash cans?
Fix: Label isFull or not isFull?
Verify: Is this trash can (still) full?
Interfaces: AMT, App, URL

1. Create or import KB?
2. Schema
3. Choose personas?
4. Interfaces
5. Dashboard

-->
