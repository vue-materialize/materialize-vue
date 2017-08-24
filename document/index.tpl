<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>document</title>
  </head>
  <body>
    <div id="app"></div><% if (process.env.NODE_ENV === 'production') { %>
    <script src="//cdn.jsdelivr.net/npm/vue@2.3.0/dist/vue.runtime.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/vue-router@2.1.1/dist/vue-router.min.js"></script>
    <% } %>
    <!-- built files will be auto injected -->
  </body>
</html>
