
CyComponentScaffold
====================
A quick start scaffold project for creating CyComponent for the CyFramework. This project requires that npm be installed globally on the development machine.

How to bootstrap a new project
-----------------------------
Use the setup script in the directory to convert the scaffold into your project (it will delete itself upon finishing setup).
```
git clone https://github.com/CyComponent/CyComponentScaffold.git
cd CyComponentScaffold && chmod +x setup.sh
./setup.sh

```

####Contains:
- React
- Redux
- SCSS
- Webpack
- Immutable
- Babel (es6,jsx supported!)
- ESLint
- Jest
- Travis

Commands
--------
```
npm run build - Build the component into /build
npm run clean - Remove anything in /build
npm run lint - Run eslint, will not cause npm to exit with an error
npm run test - Run eslint followed by jest, may cause npm to exit with an error (for travis)
npm run coverage - Run jest's coverage tool
```
