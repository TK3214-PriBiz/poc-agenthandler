<script>
var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (userAgent.includes("iPhone")) 
    {
        document.location("microsoft edge:www.google.com")
    }
    else 
    {
        document.location("https://www.bing.com")
    }
</script>