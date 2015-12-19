  <script type="text/javascript">
    var charEscape = function(_html)
      {
        var newHTML = _html;

        newHTML = _html.replace(/</g, "&lt;");
        newHTML = newHTML.replace(/>/g, "&gt;");

        return newHTML;
      };
  </script>