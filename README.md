
CyNetworkVisualizer
====================

## Template page for testing

```html
<html>

  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.0.2/react-with-addons.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.0.2/react-dom.js"></script>

    <script src="CyFramework/build/CyFramework.js"></script>
    <script src="CyNetworkStore/build/CyNetworkStore.js"></script>
    <script src="CyNetworkViewer/build/CyNetworkViewer.js"></script>
  </head>

  <body>
    <div id="viewer"></div>

    <script>
      var cyto = CyFramework.config([CyNetworkStore])
      cyto.dispatch(CyNetworkStore.networkDownloadActions.downloadBegin())
      cyto.render(CyNetworkViewer, document.getElementById('viewer'), {
        networkUrl: 'http://ci-dev-serv.ucsd.edu:3001/ndex2cyjs/a54acf93-1300-11e6-9191-0660b7976219?server=dev2',
        renderOptions: {
          touchTapThreshold: 5;
        }
      });

    </script>
  </body>
</html>
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
