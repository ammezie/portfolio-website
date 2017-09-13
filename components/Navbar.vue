<template>
    <nav uk-navbar>
        <div class="uk-navbar-left">
            <a class="uk-navbar-item uk-logo" href="/">
                <img src="~/assets/images/logo.png" alt="I'm Chimezie Enyinnaya, a Software Developer based in Lagos, Nigeria">
            </a>
        </div>

        <div class="uk-navbar-right">
            <div class="uk-navbar-toggle uk-hidden@m" uk-toggle="target: #offcanvas" uk-navbar-toggle-icon></div>

            <ul class="uk-navbar-nav uk-visible@m">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/work">Work</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
  </nav>
</template>

<style scoped>
    .uk-navbar-nav > li.uk-active > a,
    .uk-navbar-nav > li:hover > a,
    .uk-navbar-nav >li > a.uk-open,
    .uk-navbar-nav > li > a:focus {
        color: #eb3777
    }
    .uk-navbar-item,
    .uk-navbar-nav > li > a,
    .uk-navbar-toggle {
        font-family: 'PT Sans', "Helvetica Neue", Arial, sans-serif;
    }
    .uk-navbar-toggle {
        cursor: pointer;
    }
</style>