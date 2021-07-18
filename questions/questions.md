# Questions and Assignment Considerations

### Table of Contents
##### 1. Questions
##### 2. Considerations

## 1. Questions
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

Regarding the inconvenience, I’d be happy to try and help mitigate this to help improve your workflow. To start, how many clicks are too much? [If using our API is an option](https://www.algolia.com/doc/api-reference/api-methods/delete-index/), you could delete/clear an index with a single request. Please let me know what you think. 

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

For performance reasons, [Algolia limits the size a particular record can be](https://www.algolia.com/doc/faq/basics/is-there-a-size-limit-for-my-index-records/) depending on your plan. Since you mentioned that the metadata being stored does not contribute to searching, I would advise you to consider relocating the data elsewhere or to restructure your data by using a feature like [distinct](https://www.algolia.com/doc/guides/managing-results/refine-results/grouping/#introducing-algolias-distinct-feature) to break apart reviews into their own records that could be linked back to the original coffee shop.

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
* What is the workflow of this application?
* Were the variable and related scripts working up until now? If so, what changes (environmental or codewise) were made?
* What kind of environment is this (Production, Development, etc.)? 
  
Kind Regards, 

Marcus 

--
## 2. Considerations

This assignment was very thought-provoking for me due to the industry and expansive documentation available online. 

##### Assignment Completion time
The assignment took approximately 4.5 hours to complete. Outside of that, I spent a lot of time reviewing the question in detail, as well as the many ways that a solution could be presented. I found that there could have been approx. 4-5 ways to do it, albeit with varying levels of accuracy in answering the problem statement. 

##### How I interpreted the problem
With that being said, I decided to go what seemed to be the straightforward route of appending an index to the client’s autocomplete function to show how a federated search could be applied, without drastic changes to their codebase. 

Because of the fact that they had already implemented parts of the Algolia codebase into their system, I opted not to try to use the “autocomplete” class to achieve federated searches, as well as the query suggestions class because the simple addition of the query suggestions index via widgets (the one created from the initial index, all done inside the Algolia Dashboard) to the instant search they object they had was sufficient to showcase federated searches, as well as keep the control of the implementation in their scope. 

##### Clarifying questions I would have asked
If I had the opportunity to discuss with the client, some of the clarifying questions I would have asked to start would be:

* What kind of federated search experience do you envision the customer appreciating? The reason I ask is that although federated results can show query suggestions and products simultaneously, the facets of the products might be useful as part of the federated search. These include things like the brand, product category, and etc.
* Query suggestions in general highlight the most common searches, but there are a lot more possibilities with them. Have you considered what type of query suggestions you would like? For instance, query suggestions that:
  * exclude banned terms
  * promote items of interest (such as sale items, clearance, etc)
  * Promote the most misspelled words correctly (Aple - > Apple as a suggestion)

Because I didn’t have the chance to clarify these, I opted to use the most common use case of query suggestion which seemed to be the “most frequently used queries” use case, which I was able to observe in the query suggestion index after configuration.

##### TAM Project experience Overall
Lastly, regarding the actual, TAM project itself, some things I think might help improve the experience would be to modify the elements that point to “SA-Assignment”. It seems that the overall project used to be called SA (Possibly Solutions architect?). Because of this discrepancy, I had to double-check the commit history to see if I was working on the right project. 

All in all, being exposed to this type of front-end development was great, and thanks for the opportunity.











