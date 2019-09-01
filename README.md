# cloudfunctions-live-logs
Creating stuff on Serverless is very exciting but also a big pain in the *** when it comes to testing your functions on the cloud. I've come accross a similar problem and hate to upload my functions and then checkout the logs on Google Clouds Log terminal.

## What do we have to work with?
So basically GCP does provide you with some basic tools for logging but you'll mostly be visiting the logs terminal to checkout logs. There's one way to see logs in the terminal as well and that's to run firebase functions:log command, which is useful but it would give you a whole lots of line to work with.

Wouldn't it be cool if we would see our logs live in the terminal ?

## A good but effective solution
If we could get the logs live on our terminal from the GCP logs would be great. This is what I've tried to do, it's a very basic barebox model of my approach. But I am hoping that people could contribute to it and make this better?

So this took me like 1 / 2 hours and 1 cup of coffee to make. Please feel free to add more to it and make this a better package.

## How to Install
Just clone the repo and do `node index.js` you can specific the specific function as well like `node index.js --only foo` and it will show you live logs of foo() function on GCP.

*Caution* 
This would fetch logs of functions that are uploaded to your GCP and not the ones that are locally created.

Thanks