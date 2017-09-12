<template>
    <div class="uk-section">
        <div class="uk-container">
            <h1 class="uk-heading-bullet">My Work</h1>
            <p>
                Over the years, I've worked on various types of projects both personal and professional. Below are some of the projects I've work on.
            </p>

            <div class="uk-grid-match uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid>
                <div>
                    <a href="https://naijadevs.ng" target="_blank">
                        <div class="uk-card uk-card-default uk-card-hover">
                            <div class="uk-card-media-top">
                                <img src="~/assets/images/projects/naijadevs.ng.png" alt="naijadevs.ng">
                            </div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title uk-margin-remove-bottom">Naijadevs</h3>
                                <p>
                                    A job board that connects talented Nigerian developers and designers with companies who need them. It was built with Laravel, Vue.js, Semantic UI and Beanstalkd for queue.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://mylungu.com" target="_blank">
                        <div class="uk-card uk-card-default uk-card-hover">
                            <div class="uk-card-media-top">
                                <img src="~/assets/images/projects/mylungu.com.png" alt="mylungu.com">
                            </div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title uk-margin-remove-bottom">Mylungu</h3>
                                <p>
                                    A classified ad website for students in tertiary institution. It was built with Laravel, Vue.js, Bootstrap and Elasticsearch.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="http://shapers9ja.com" target="_blank">
                        <div class="uk-card uk-card-default uk-card-hover">
                            <div class="uk-card-media-top">
                                <img src="~/assets/images/projects/shapers9ja.com.png" alt="shapers9ja.com">
                            </div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title uk-margin-remove-bottom">Shapers9ja</h3>
                                <p>
                                    An eCommerce website that deals with female body shapers. It was built with OpenCart and Bootstrap.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://openlaravel.com" target="_blank">
                        <div class="uk-card uk-card-default uk-card-hover">
                            <div class="uk-card-media-top">
                                <img src="~/assets/images/projects/openlaravel.com.png" alt="openlaravel.com">
                            </div>
                            <div class="uk-card-body">
                                <div class="uk-card-badge uk-label uk-label-warning">Open Source</div>
                                <h3 class="uk-card-title uk-margin-remove-bottom">Open Laravel</h3>
                                <p>
                                    A repository of open source projects built using Laravel. It was built with Laravel, Vue.js, Bulma and Algolia.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/ammezie/support-ticket" target="_blank">
                        <div class="uk-card uk-card-default uk-card-hover">
                            <div class="uk-card-media-top">
                                <img src="https://cdn.scotch.io/1965/nA2vkfDJTaGDzr3Up1fY_screencapture-supportticket-herokuapp-com-my_tickets-1468064558977.png" alt="support ticket">
                            </div>
                            <div class="uk-card-body">
                                <div class="uk-card-badge uk-label uk-label-warning">Open Source</div>
                                <h3 class="uk-card-title uk-margin-remove-bottom">Support Ticket</h3>
                                <p>
                                    A support ticket application built using the Laravel framework.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    
    }
</script>

<style scoped>
    a {
        text-decoration: none
    }
</style>
