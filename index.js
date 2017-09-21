var defaultWorkshop = {
    name:'Cloud 101: AWS, Predix, GEIX, Azure Overview',
    image: 'assets/imgs/cloud.png',
    date: 'Friday, Oct 6 1:00 PM in Room 637', 
    when: 'Friday, Oct 6 1:00 PM',
    where: 'Room 637',
    prereqs: [
        {name: 'Your Laptop', url: 'www.google.com'}
    ],
    links: [
        {name: 'Angular 2 Beginners Guide', url: 'www.angular.io'}
    ],
    agenda: [
        {title: 'Overview GE Cloud Offerings', description: 'Will discuss a general overview of Predix and IoT'},
        {title: 'Getting Started', description: 'We will talk about how IoT applications are change GE already'},
        {title: 'Intro to Automated Deployment with Chef', description: ''},
        {title: 'Deploy WordPress', description: 'This section will get you comfortable with the Raspberry Pi and how to do some simple things in Python'},
        {title: 'Deploy Minecraft', description: 'We will show you how to deploy a simple web app and timeseries database on Predix'}
    ],
    short_description: 'The internet of things is the future of digital an industrial companies. Learn how to do it in Predix', 
    description: 'This workshop will show you how to get started in predix IoT by having you put together a simple weather station on a raspberry pi and deploy monitoring apps on predix', 
    host_name: 'Duane Kauffman', 
    host_image: 'assets/imgs/corey_shrader.png',
    host_title: 'Staff Software Engineer', 
    host_team: 'GE Digital - Digital Engineering' 
};

var workshopDetail = new Vue({
    el: '#workshop_detail',
    mitem: {name: 'bob'},
    data: {
        selectedItem: {name: 'bob'}
    }, 
    methods: {
        show: function(){
            //alert(JSON.stringify(workshopDetail.mitem));
            this.selectedItem = workshopDetail.mitem;
            //$('#workshop_detail').modal('show');
        }
    },
    show: function(){
        //alert(JSON.stringify(mitem));
        $('#workshop_detail').modal('show');
    }
});

var workshopDetail_alt = new Vue({
    el: '#workshop_detail_inpage',
    mitem: defaultWorkshop,
    data: {
        selectedItem: {name: 'bob'}, 
        style: 'display: none'
    }, 
    methods: {
        show: function(){
            //alert(JSON.stringify(workshopDetail.mitem));
            this.selectedItem = workshopDetail.mitem;
            this.style = 'display: block';
            //$('#workshop_detail').modal('show');
        }, 
        close: function(){
            this.style= 'display: none;';
        }
    },
    
    show: function(){
        //alert(JSON.stringify(mitem));
        $('#workshop_detail').modal('show');
    }
});

var workshops = new Vue({
    el: '#workshops', 
    data: {
        url: document.URL
    },
    methods: {
        select: function(item){

            selectedItem = item;
            workshopDetail.mitem = item;
            //workshopDetail.show();
            workshopDetail_alt.mitem = item;
            workshopDetail_alt.show();
            //alert(JSON.stringify(workshopDetail_alt.mitem));
        }, 
        url: function(){

            return window.location.url;
        }
    },
    data: {
        items: workshop_data
    }
});
