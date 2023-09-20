<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
    <title>orV2</title>
</head>

<body>
    <div class="search-wrapper">
        <label for="search">Search Users</label>
        <input type="search" id="search" data-search>
    </div>
    <div class="user-cards" data-user-cards-container></div>
    <template data-user-template>
        <div class="card" onclick="change()">
            <div class="header" data-header></div>
            <div class="body" data-body></div>
        </div>
    </template>
</body>

</html>
