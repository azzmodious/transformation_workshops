var workshop_data = [
    {
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
    },
    {
        name:'GEIX Cloud Hosting 101: HelloWorld + Chef',
        image: 'assets/imgs/cloud.png',
        date: 'Friday, Nov 3 1:00 PM in Room 637', 
        when: 'Friday, Nov 3 1:00 PM',
        where: 'Room 637',
        prereqs: [
            {name: 'Mac or PC', url: 'www.google.com'}, 
            {name: 'Git', url: 'www.google.com'},
            {name: 'Node JS', url: 'www.google.com'}
        ],
        links: [
            {name: 'Chef.io', url: 'https://www.chef.io/chef/'},
            {name: 'CoreTech', url: 'https://www.chef.io/chef/'}, 

        ],
        agenda: [
            {title: 'Overview of GE Cloud Strategy and GEIX', description: 'This will be a general history and usage of the GEIX platform'},
            {title: 'Why & When We Should Use GEIX', description: 'This section will talk about the appropriate usage of the GEIX and why its better than AWS'},
            {title: 'Showcase', description: 'Its important to know how GEIX has been used in the company already'},
            {title: 'Lab Use Case: Helloworld App', description: 'We will walk through the simple example we plan to have you construct and deploy on GEIX'},
            {title: 'Create a Chef Script & Deployment', description: 'This section will give you an quick overview of chef and how to deploy to GEIX'},
            {title: 'Where To Go Next', description: 'We would like to discuss where to go next with what you have learned'},
        ],
        short_description: 'GEIX is one of the under utilized cloud offerings for GE. Learn how and when to use GEIX', 
        description: 'This workshop will focus on dispelling the mystery that is GEIX. We will walk you through what GEIX is, why you should care about it and lastly how to build a simple application on the GEIX platform using Java and Chef. ', 
        host_name: 'Corey Shrader', 
        host_image: 'assets/imgs/corey_shrader.png',
        host_title: 'Sr. Staff Infra Architect', 
        host_team: 'GE Digital - GEIX Cloud Team' 
    }, 
    {
        name:'Using Chef to Deploy a Web App to the Cloud',
        image: 'assets/imgs/chef.png',
        date: 'Friday, Oct 20 1:00 PM in Room 637', 
        when: 'Friday, Oct 20 1:00 PM',
        where: 'Room 637',
        prereqs: [
            {name: 'Laptop', url: 'www.google.com'}, 
            {name: 'Chef Client Download', url: 'http://downloads.chef.io'}
        ],
        links: [
            {name: 'Chef.io', url: 'https://www.chef.io/chef/'},
            {name: 'CoreTech', url: 'https://www.chef.io/chef/'}, 

        ],
        agenda: [
            {title: 'Overview of Chef', description: 'This will be a general history and usage of the GEIX platform'},
            {title: 'Setting up your environment', description: 'This section will talk about the appropriate usage of the GEIX and why its better than AWS'},
            {title: 'Starting your cookbook', description: 'This section will talk about the appropriate usage of the GEIX and why its better than AWS'},
            {title: 'Writing a recipe', description: 'Its important to know how GEIX has been used in the company already'},
            {title: 'Baking an Instance', description: 'We will walk through the simple example we plan to have you construct and deploy on GEIX'},
            {title: 'Maintaining Integrity Production', description: 'This section will give you an quick overview of chef and how to deploy to GEIX'}
        ],
        short_description: 'Chef is great for automation, compliance', 
        description: 'This workshop will focus on dispelling the mystery that is GEIX. We will walk you through what GEIX is, why you should care about it and lastly how to build a simple application on the GEIX platform using Java and Chef. ', 
        host_name: 'Jackie Chute', 
        host_image: 'assets/imgs/chute_jackie.png',
        host_title: 'Sr. Build & Release Engineer', 
        host_team: 'GE Digital - Predix Cloud Team' 
    }, 
    {
        name:'Chat Bots 101: Azure & Natural Language Processing',
        image: 'assets/imgs/chatbot.png',
        date: 'Friday, Nov 17 1:00 PM in Room 637', 
        when: 'Friday, Nov 17 1:00 PM',
        where: 'Room 637',
        prereqs: [
            {name: 'Download NodeJS', url: 'www.google.com'}, 
            {name: 'Download Git', url: 'www.google.com'},
            {name: 'Microsoft Bot Framework', url: 'www.google.com'}
        ],
        links: [
            {name: 'Node JS', url: 'www.angular.io'}
        ],
        agenda: [
            {title: 'What is a Chatbot?', description: 'This will be a general history and usage of the GEIX platform'},
            {title: 'What are Chatbots good for?', description: 'This section will talk about the appropriate usage of the GEIX and why its better than AWS'},
            {title: 'Examples of Chatbots', description: 'This section will talk about the appropriate usage of the GEIX and why its better than AWS'},
            {title: 'MyTech and Skype', description: 'This section will talk about the appropriate usage of the GEIX and why its better than AWS'},
            {title: 'Spin Up a New Bot in Azure', description: 'This section will talk about the appropriate usage of the GEIX and why its better than AWS'},
            {title: 'Create Intents & Uterances in LUIS', description: 'This section will talk about the appropriate usage of the GEIX and why its better than AWS'},
            {title: 'QnA Maker for FAQs', description: 'This section will talk about the appropriate usage of the GEIX and why its better than AWS'},
            {title: 'Send an Email with a Chat Dialog', description: 'This section will talk about the appropriate usage of the GEIX and why its better than AWS'},
            {title: 'Deploying a ChatBot as a WebApp', description: 'This section will talk about the appropriate usage of the GEIX and why its better than AWS'}
        ],
        short_description: 'This will be a brief overview on what chat bots are, what they can do and how to build them', 
        description: 'Chatbots are an interesting new way to solve business problems around GE. Microsoft has build the Bot Framework to allow us to build bots quickly and cheaply. This workshop will walk you through what a bot is, how to build your own and some examples of the cool things being down with bots', 
        host_name: 'Max Randolph', 
        host_image: 'assets/imgs/max_randolph.png',
        host_title: 'Staff User Experience Engineer', 
        host_team: 'GE Digital - Innovation Studio' 
    },
    {
        name:'Intro to 3D Printing: Makerbot 101',
        image: 'assets/imgs/3dprinter.png',
        date: 'Friday, Oct 13 1:00 PM in Room 637', 
        when: 'Friday, Oct 13 1:00 PM',
        where: 'Room 637',
        prereqs: [
            {name: 'None', url: 'www.google.com'}
        ],
        links: [
            {name: 'Angular 2 Beginners Guide', url: 'www.angular.io'}
        ],
        agenda: [
            {title: 'Overview of the 3D printing industry', description: 'This will be a general history and usage of the GEIX platform'},
            {title: 'Trends', description: 'This section will talk about the appropriate usage of the GEIX and why its better than AWS'},
            {title: 'Showcase', description: 'This section will talk about the appropriate usage of the GEIX and why its better than AWS'},
            {title: 'TickerCAD and STL Files', description: 'This section will talk about the appropriate usage of the GEIX and why its better than AWS'},
            {title: 'Thingiverse for Free Models', description: 'This section will talk about the appropriate usage of the GEIX and why its better than AWS'},
            {title: 'Down to the Printing', description: 'This section will talk about the appropriate usage of the GEIX and why its better than AWS'},
            {title: 'Materials', description: 'This section will talk about the appropriate usage of the GEIX and why its better than AWS'},
            {title: 'Mantainance and Troubleshooting', description: 'This section will talk about the appropriate usage of the GEIX and why its better than AWS'},
            {title: 'Buying Your Own Printer', description: 'This section will talk about the appropriate usage of the GEIX and why its better than AWS'},
        ],
        short_description: 'Andrew EhlersChat bots have the potential to revelutionize the way we think about the help desk and tribal knowledge. Build your first bot ....', 
        description: 'Fundementals fo 3d design and ticker CAD model building', 
        host_name: 'Matt Bowen', 
        host_image: 'assets/imgs/matt_bowen.png',
        host_title: 'Director of Enterprise Applications', 
        host_team: 'GE Digital - Digital Engineering' 
    }, 
    {
        name:'Intro to Predix IoT with Raspberry Pi',
        image: 'assets/imgs/raspberrypi.png',
        date: 'Friday, Oct 22 1:00 PM in Room 637', 
        when: 'Friday, Oct 22 1:00 PM',
        where: 'Room 637',
        prereqs: [
            {name: 'None', url: 'www.google.com'}
        ],
        links: [
            {name: 'Angular 2 Beginners Guide', url: 'www.angular.io'}
        ],
        agenda: [
            {title: 'Overview of Predix & IoT', description: 'Will discuss a general overview of Predix and IoT'},
            {title: 'Showcase', description: 'We will talk about how IoT applications are change GE already'},
            {title: 'Intro to the Raspberry Pi', description: 'This section will get you comfortable with the Raspberry Pi and how to do some simple things in Python'},
            {title: 'Introduction to Predix', description: 'We will show you how to deploy a simple web app and timeseries database on Predix'},
            {title: 'Putting it All Together', description: 'We will show you how to read from a temperature sensor and connect it to the Predix Machine'},
            {title: 'Where to Go Next With This', description: 'There are many other things we can do in the Predix IoT space. We give you some things to consider'},
            
        ],
        short_description: 'The internet of things is the future of digital an industrial companies. Learn how to do it in Predix', 
        description: 'This workshop will show you how to get started in predix IoT by having you put together a simple weather station on a raspberry pi and deploy monitoring apps on predix', 
        host_name: 'Corey Schrader', 
        host_image: 'assets/imgs/corey_shrader.png',
        host_title: 'Staff Software Engineer', 
        host_team: 'GE Digital - Digital Engineering' 
    }
];