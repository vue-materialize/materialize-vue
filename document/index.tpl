<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>document</title>
  </head>
  <body>
    <div id="app"></div><% if (process.env.NODE_ENV === 'production') { %>
    <script src="//cdn.jsdelivr.net/npm/vue@2.3.0/dist/vue.runtime.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/vue-router@2.1.1/dist/vue-router.min.js"></script><% } %>
    <!-- built files will be auto injected -->
  </body>
  <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-84335471-1', 'auto');
      ga('send', 'pageview');

      window.addEventListener('hashchange', function () {
        ga('set', 'page', window.location.href);
        ga('send', 'pageview');
      });
    </script>
</html>
