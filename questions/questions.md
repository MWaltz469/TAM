*Question 1*:

 
From: marissa@startup.com  
Subject:  Bad design  

Hello,  
  
Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.  
   
Thanks,  
Marissa  


  
--

*Answer 1* 

Hey Marissa, 

Thanks for providing your honest feedback about the new dashboard changes! Just as a reminder, you can always let us know about your concerns directly by hitting the “feedback” link in the bottom left-hand corner of any dashboard page. 

Regarding the inconvenience, I’d be happy to try and help mitigate this to help improve your workflow. To start, how many clicks are too much? If using our API is an option, you could delete/clear an index with a single request. Please let me know what you think. 

Kind Regards, 

Marcus

--








*Question 2*:   
  
From: carrie@coffee.com  
Subject: URGENT ISSUE WITH PRODUCTION!!!!  
  
Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".  
  
Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?  
  
Please advise on how to fix this. Thanks.   

--

*Answer 2*:

Hey Carrie, 


For performance reasons, Algolia limits the size a particular record can be depending on your plan. Since you mentioned that the metadata being stored does not contribute to searching, I would advise you to consider relocating the data elsewhere or to restructure your data by using a feature like distinct to break apart reviews into their own records that could be linked back to the original coffee shop.

With that being said, I’m happy to hop on a call to clarify what Algolia size limits mean and to also help mitigate the downtime currently faced since this morning. 

I am available from 12:00 PM EDT onwards. Please let me know what works for you.

Kind Regards, 

Marcus 
--







*Question 3*:   


From: marc@hotmail.com  
Subject: Error on website  
  
Hi, my website is not working and here's the error:  
  
![error message](./error.png)  
  
Can you fix it please?  

--

*Answer 3*:

Hey Marc,

Thanks for reaching out! I’d be happy to help assist in fixing the error. 

The error in the screenshot typically means that the particular variable “searchkit” was not defined or accessible in the scope of the related javascripts mentioned. 

To help further, can you please answer the following:
What is the workflow of this application?
Were the variable and related scripts working up until now? If so, what changes (environmental or codewise) were made?
What kind of environment is this (Production, Development, etc.)? 
  
Kind Regards, 

Marcus 

--
