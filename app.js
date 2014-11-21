var i = 0;
setInterval(function() {
    console.log('app running!');
    i++;
    if (i > 10000) {
      process.exit();
    }
}, 1000);
