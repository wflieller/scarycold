Router.configure({

    layoutTemplate: 'layout'

});


Router.map(function() {

    this.route('homepage', {
        path: '/'
    });

    this.route('amenities');

    this.route('login');

    this.route('services');

    this.route('virtualTour');

    this.route('plans');

    this.route('contact');

    this.route('application');

    this.route('blog');


});
