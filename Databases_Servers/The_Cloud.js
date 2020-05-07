/* 

The Cloud

Cloud is basically running code on someone else’s computer. This means they could turn it off. 

Why does the cloud exist? 
To run applications or our own website, we need a server that is always on - 365/24 hours a day. A server doesn’t need a screen. Same things our computer has, but have more power. 

To deploy our software we need to: 
Get a server
Configure the server
Deploy our software onto that server

A bit like what we’ve been doing on our own laptops and configuring them with with npm and node to allow us to run the software we’ve been doing on the course so far

Elastic scaling - means you can get servers online quickly and then decommission them within a few seconds. So the BBC can rent servers for Saturday night Strictly voting and then they don’t need to pay for them for the rest of the week. 
AWS have got lots of servers. 

Banking and military don’t use Cloud for security reasons. UK govt didn’t use cloud because there were no providers that had UK presence. Now there are UK presence in most of providers. 

Cloud can vastly improve and decrease time to market. 

Means we can dynamically and elastically scale. When things used to be on a CD-Rom, if it was wrong, that would be a real problem. But now it can updated online, developers can change things and test them and if they don’t work, they can quietly delete them. 

A server can just cost £30 a month to rent, which is an operating expenditure. 

In old days you’d need a server for £3500 and probably another backup one, so capital expenditure of £7000 at the beginning. 

Transferring capital expenditure to operating expenditure. 

IN THE EVENT OF FAILURE: 
You can’t physically go and turn the thing on and off
You probably don’t have someone you can speak to at the Cloud provider 
And if you did, they don’t care about your business as much as you do. (unless you’re the BBC or Netflix. Netflix use AWS)
MTTR - Mean Time To Recovery - testing failure - to see what would happen if the Cloud failed
Lots of businesses will have a Hybrid Cloud strategy and put half on AWS and half on Google. 
So if Amazon goes down, how long does it take to upload the other half up to Google. 

So when deploying applications onto cloud

Think differently … 
Assume that your server WILL break and design for failure
Netflix Chaos Monkey

Major providers of Cloud Infrastructure:
90% is on AWS
Google Cloud Platform - it’s really stable as it is driven by their internal processes - they find things that work well internally and then sell them externally. But not so flexible. 
Microsoft Azure

REGIONS AND AVAILABILITY ZONE

All cloud providers have different terminology, but they all have regions or availability zones. A place in the world. 
Thank of  a Region as a geographic area 
Such as Dublin is eu-west-1, London is eu-west-2, Frankfurt (eu-central-1), Paris (eu-west-3)

Think of an Availability Zone as an isolated building in that region
Such as eu-west-2a, eu-west-2b, eu-west-2c 

We would choose the region and the building, and we can spread the risk by choosing to put half in each of two regions and maybe two buildings, so you spread what would happen if one of the building went down. 

It might be critical to your business if your servers are down for an hour (which is about how long it takes AWS to fix a problem). 

But it might not matter. 

So we replicate things to manage the risk. But there are cost implications and human limit to how many things we can monitor and look after. 

And you want your servers to be near to your customers so they don’t have to wait 80ms for content to arrive from the states. 

Choosing where your data sits can be a legal thing too. If you have a business with German customers, their data has to reside in Germany, it can’t leave. 

Distributed Denial of Service Attack - this is a kind of blackmail. Hackers will get servers to all go to the same website, so it exceeds the bandwidth and that makes it unavailable. They keep doing it until you pay them money. 

"Captchas" exist to avoid machines hammering a form and keep submitting  it again and again. 


IaaS - INFRASTRUCTURE AS A SERVICE

AWS: EC2 (Elastic Compute)
This is a more labour-intensive process. You set up a server that runs an operating system such as Ubuntu.
You have to configure the server in order to run applications. 
i.e. you have to put on Node or whatever you want to use. 
It's used when people want total control of when it gets updated etc. 
It’s cheaper in terms of what you pay Amazon, but probably not cheaper when you take account of what you need to pay your staff to make it happen

PaaS - PLATFORM AS A SERVICE

AWS: RDS (Relational Database Service), SES (Simple Email Service), ECS (Elastic Continer Service)
You say ‘I want a MySQL Database”
Amazon say ‘Here you go, don’t worry, we’ll manage all the kit under the hood”
Amazon developers are pretty good and sometimes it’s better to use their expertise.

SERVERLESS AKA FaaS (Functions as a Service)

A bit like PaaS

It’s NOT Serverless!!! That is just a marketing term.

You say “Here is my code for a single function to save a todo task to the database”

Amazon say” No problem, we’ll ensure your code works when it's needed, oh and also we WON’T charge you anything unless your code runs”
With Serverless, if your code only runs twice a month i.e. if you only get a visitor to your website twice a month, you only pay for when the code runs i.e. when you get a visit. 

SOME COMMON SERVICES

EC2 (Elastic Compute)

Servers in the Cloud
Windows and Linux

S3 (Super Simple Storage)
Amazon S3 is an object storage service that offers industry-leading scalability, data availability, security and performance. 
Basically you can store files there. 
Proper cheap! 

If someone uploads a photo to our app, we might save it in S3. 

RDS (Relational Database Service)
Relational databases on demand (PaaS)
Various forms such as MySQL, Oracle, Postgres, SQL server, Aurora and MariaDB

What you put on a database is anything you want to ‘persist’ - once the user has clicked on something or done something and  you want that to be available again - persistent storage. 

All the database does is make it easy to access these files in a structured way.  Using a new language - SQL - structured query language. 

AWS Lambda (amazon’s product name for their serverless provision)
Lets you run code without provisioning or managing servers. You pay only for the compute time you consume - there is no charge when your code isn’t running

AWS Route53
Is a highly available and scalable cloud DNS service 
Route web visitors to the correct server
If I’ve got techreturners.net and I’ve got a server on a particular IP address, I can use Route53 to send users of techreturners.net to the right server.
Routes web visitors to the correct server